import {Users} from "$lib/server/users";
import type {Pool} from "mariadb";
import {error, json} from "@sveltejs/kit";
import type {LoginData, UserDataOpt, UserSession} from "$lib/types";
import {findSessionByTg, newUserSession} from "$lib/utils";

export async function POST({ request, cookies }) {
    // @ts-ignore
    const pool: Pool = globalThis.databaseConnectionPool as Pool;
    const users: Users = new Users(pool)
    const newUser: LoginData = await request.json()

    const res: UserDataOpt = await users.lookupUser(newUser.telegramID)

    // @ts-ignore
    const sessionStorage: Map<string, UserSession> = globalThis.sessionStorage

    if (res) {
        const userSession = findSessionByTg(res.telegramID)
        if (userSession) {
            return error(500)
        } else {
            const userSession = newUserSession(res)
            sessionStorage.set(res.telegramID, userSession)
            cookies.set("sessionID", userSession.sessionId, {path: "/"})
            return json(res)
        }
    } else {
        return error(500)
    }
}
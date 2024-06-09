import {Users} from "$lib/server/users";
import type {Pool} from "mariadb";
import {error, json} from "@sveltejs/kit";
import type {LoginData, UserDataOpt} from "$lib/types";
import {redactUserData} from "$lib/utils";

export async function POST({ request }) {
    // @ts-ignore
    const pool: Pool = globalThis.databaseConnectionPool as Pool;
    const users: Users = new Users(pool)
    const newUser: LoginData = await request.json()

    const res: UserDataOpt = await users.registerUser(newUser.telegramID, newUser.password)

    if (res) {
        return json(redactUserData(res, false))
    } else {
        return error(500)
    }
}
import {Users} from "$lib/server/users";
import type {Pool} from "mariadb";
import {error, json} from "@sveltejs/kit";
import type {LoginData, UserDataOpt} from "$lib/types";

export async function POST({ request }) {
    // @ts-ignore
    const pool: Pool = globalThis.databaseConnectionPool as Pool;
    const users: Users = new Users(pool)
    const newUser: LoginData = await request.json()

    const res: UserDataOpt = await users.registerUser(newUser.telegramID, newUser.password)

    if (res) {
        return json(res)
    } else {
        return error(500)
    }
}
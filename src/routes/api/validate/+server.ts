import {error, json, redirect} from "@sveltejs/kit";
import {findSessionBySessionId, redactUserData} from "$lib/utils";
import type {MyToken} from "$lib/types";

export async function POST({ request, cookies }) {
    const sessionID = cookies.get('sessionID');
    const hasSession = sessionID != null;
    // @ts-ignore
    const myToken: MyToken = await request.json()

    console.log("Validating token...")
    if (!hasSession) {
        console.log("Validating token... no session")
        return error(500)
    } else {
        const res = findSessionBySessionId(sessionID)
        if (res) {
            console.log("Validating token... my " + myToken.token + " " + res.user.token)
            if (res.user.token === myToken.token) {
                return json(res.user)
            } else {
                console.log("Validating token... no match")
                cookies.delete('sessionID', {path: "/"})
                sessionStorage.delete(res.user.telegramID)

                return error(500)
            }
        } else {
            console.log("Validating token... user not found")
            return error(500)
        }
    }
}
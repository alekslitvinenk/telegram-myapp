import {error, json} from "@sveltejs/kit";
import {findSessionBySessionId} from "$lib/utils";

export async function POST({ request, cookies }) {
    const sessionID = cookies.get('sessionID');
    const hasSession = sessionID != null;

    // @ts-ignore
    const sessionStorage: Map<string, UserSession> = globalThis.sessionStorage

    console.log("Logging out...")
    if (!hasSession) {
        console.log("Logging out...... no cookie")
        return error(500)
    } else {
        cookies.delete('sessionID', {path: "/"})
        const res = findSessionBySessionId(sessionID)
        if (res) {
            sessionStorage.delete(res.sessionId)
            return json("Ok")
        } else {
            console.log("Logging out... no session")
            return error(500)
        }
    }
}
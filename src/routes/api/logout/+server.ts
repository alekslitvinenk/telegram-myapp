import {error, json, redirect} from "@sveltejs/kit";

export async function POST({ request, cookies }) {
    const sessionID = cookies.get('sessionID');
    const hasSession = sessionID != null;

    // @ts-ignore
    const sessionStorage: Map<string, UserSession> = globalThis.sessionStorage

    console.log("Logging out...")
    if (!hasSession) {
        console.log("Logging out...... no cookie")
    } else {
        cookies.delete('sessionID', {path: "/"})
        const res = Array.from(sessionStorage.values()).filter(session => session.sessionId === sessionID)
        if (res.length == 0) {
            console.log("Logging out...... no session")
        } else {
            const session = res[0]
            sessionStorage.delete(session.sessionId)
        }
    }

    throw redirect(302, "/sign-in")
}
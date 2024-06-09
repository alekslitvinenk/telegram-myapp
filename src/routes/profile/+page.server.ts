import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const sessionID = cookies.get('sessionID');
    const hasSession = sessionID != null;

    // @ts-ignore
    const sessionStorage: Map<string, UserSession> = globalThis.sessionStorage

    console.log("Loading /profile...")
    if (!hasSession) {
        console.log("Loading /profile... no session")
        throw redirect(302, "/sign-in")
    } else {
        const res = Array.from(sessionStorage.values()).filter(session => session.sessionId === sessionID)
        if (res.length > 0) {
            console.log("Loading /profile... user found")
            return {
                data: res[0].user
            }
        } else {
            console.log("Loading /profile... user not found")
            throw redirect(302, "/sign-in")
        }
    }
}
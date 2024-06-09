import {redirect} from "@sveltejs/kit";
import {findSessionBySessionId} from "$lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const sessionID = cookies.get('sessionID');
    const hasSession = sessionID != null;

    console.log("Loading /profile...")
    if (!hasSession) {
        console.log("Loading /profile... no session")
        throw redirect(302, "/sign-in")
    } else {
        const res = findSessionBySessionId(sessionID)
        if (res) {
            console.log("Loading /profile... user found")
            return {
                data: res.user
            }
        } else {
            console.log("Loading /profile... user not found")
            throw redirect(302, "/sign-in")
        }
    }
}
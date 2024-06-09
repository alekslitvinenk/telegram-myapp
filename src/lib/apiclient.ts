import type {LoginData} from "$lib/types";

export function quickAddUser(newUser: LoginData) {
    return fetch("/api/register", {
        body: JSON.stringify(newUser),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
import type {LoginData} from "$lib/types";

export function doLogin(credetials: LoginData) {
    return fetch("/api/login", {
        body: JSON.stringify(credetials),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function doLogout() {
    return fetch("/api/logout", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function quickAddUser(newUser: LoginData) {
    return fetch("/api/register", {
        body: JSON.stringify(newUser),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
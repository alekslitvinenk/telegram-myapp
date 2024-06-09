import {v4 as uuidv4} from 'uuid';
import type {LoginData, UserData, UserSession} from "$lib/types";

export function getNewToken(): string {
    return uuidv4();
}

export function isLoginData(value: unknown): value is LoginData {
    const loginData: LoginData = value as LoginData;
    return loginData.telegramID !== undefined && loginData.password !== undefined;
}

export function newUserSession(value: UserData): UserSession {
    return {user: value, sessionId: getNewToken()};
}
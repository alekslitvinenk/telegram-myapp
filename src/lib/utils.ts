import {v4 as uuidv4} from 'uuid';
import type {LoginData, UserData, UserSession, UserSessionOpt} from "$lib/types";

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

export function findSessionByTg(telegramID: string): UserSessionOpt {
    // @ts-ignore
    const sessionStorage: Map<string, UserSession> = globalThis.sessionStorage

    return sessionStorage.get(telegramID)
}

export function findSessionBySessionId(sessionID: string): UserSessionOpt {
    // @ts-ignore
    const sessionStorage: Map<string, UserSession> = globalThis.sessionStorage

    return Array.from(sessionStorage.values()).find(session => session.sessionId === sessionID)
}
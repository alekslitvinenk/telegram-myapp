import {v4 as uuidv4} from 'uuid';
import type {LoginData} from "$lib/types";

export function getNewToken(): string {
    return uuidv4();
}

export function isLoginData(value: unknown): value is LoginData {
    const loginData: LoginData = value as LoginData;
    return loginData.telegramID !== undefined && loginData.password !== undefined;
}
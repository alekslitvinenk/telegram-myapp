export interface LoginData {
    telegramID: string;
    password: string;
}

export interface UserData extends LoginData {
    createdAt: Date;
    token: string; // automatically generated token
}

export interface UserSession {
    user: UserData;
    sessionId: string;
}

export interface MyToken {
    token: string
}

export type UserDataOpt = UserData | null

export type UserSessionOpt = UserSession | undefined
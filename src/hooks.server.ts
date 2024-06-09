import mariadb from "mariadb";
import type {UserData, UserSession} from "$lib/types";

// @ts-ignore
/*globalThis.databaseConnectionPool ??= mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    connectionLimit: 5,
});*/

// @ts-ignore
globalThis.databaseConnectionPool ??= mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "Ichufef@5",
    database: "telegram",
    connectionLimit: 5,
});

// @ts-ignore
globalThis.sessionStorage ??= new Map<string, UserSession>()
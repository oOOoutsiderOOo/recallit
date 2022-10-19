import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("users.db");

export const init = () => {
    const promise = new Promise((resolve: any, reject: any) => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, picture TEXT)",
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const addUser = (id: string, email: string, picture = "") => {
    const promise = new Promise((resolve: any, reject: any) => {
        db.transaction(tx => {
            tx.executeSql(
                "INSERT INTO users (id, email, picture) VALUES (?, ?, ?);",
                [id, email, picture],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const fetchUsers = () => {
    const promise = new Promise((resolve: any, reject: any) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM users;",
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const deleteTable = () => {
    const promise = new Promise((resolve: any, reject: any) => {
        db.transaction(tx => {
            tx.executeSql(
                "DROP TABLE IF EXISTS users;",
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

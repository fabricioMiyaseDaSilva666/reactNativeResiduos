import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDataBase(dataBase: SQLiteDatabase){
    await dataBase.execAsync(`
        CREATE TABLE IF NOT EXISTS residuo(
            id integer primary key autoincrement,
            datinRes date not null,
            categoria text not null,
            peso text not null
        );
    `) //Esse é o acento agundo
} // É algo que acontece antes do celular abrir, ajuda a não fechar
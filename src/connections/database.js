import sqlite3 from "sqlite3";

const createDB = (path)=>{
    return new Promise((resolve, reject)=>{

        const db = new sqlite3.Database(path, (err)=>{
            if( err ) return reject(err.message);
        });
        resolve(db);
        console.log('Connected to the store database.');
    });
}

const createTable = (db)=>{
    const sql = `
        CREATE TABLE IF NOT EXISTS
        products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            qty INTEGER NOT NULL
        );
    `;

    db.run(sql, (err) =>{
        if( err ) return reject(err.message);
    });
    console.log("Table products set.");
    db.close();
}

export {createDB, createTable}
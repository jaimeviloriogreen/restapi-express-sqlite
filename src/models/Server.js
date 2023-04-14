import express from "express";
import cors from "cors";
import router from "../routes/main.js";
import apiRouter from "../routes/apiRouter.js";
import { createDB, createTable }  from "../connections/database.js";

export default class{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4500;
        this.apiPath = "/api";

         // Create Database and table
        this.database();

        // Middleware
        this.middleware();

        // Router
        this.router();
    }

    middleware(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static("src/public"));
    }

    router(){
        this.app.use(router);
        this.app.use(this.apiPath, apiRouter);
    }

    async database(){
        const db = await createDB("./src/database/store.db")
        createTable(db);
    }

    listen(){
        this.app.listen(this.port, ()=> console.log(`Running on port ${this.port}`));
    }
}
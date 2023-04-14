import { request, response } from "express";
import { getProducts, insertProduct } from "../connections/store.js";
import { createDB } from "../connections/database.js";
import Product from "../models/Product.js";


const getAllProducts = async (req = request, res = response)=>{
    try {
        const db = await createDB("./src/database/store.db");
        const products = await getProducts(db);

        res.status(200).json(products);
    } catch (error) {
        console.log({error});
    }
}

const insertProducts = async (req = request, res = response)=>{
    try {
        const { name, price, qty } = req.body;
        const db = await createDB("./src/database/store.db");

        const product = new Product(name, Number.parseFloat(price), Number.parseInt(qty));

        const insertedId = await insertProduct(db, product);
        console.log();
        
        res.status(200).json({"msg":"One product have been inserted!", insertedId});
    } catch (error) {
        console.log({error});
    }
}


export{getAllProducts, insertProducts}
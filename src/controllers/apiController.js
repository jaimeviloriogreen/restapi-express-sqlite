import { request, response } from "express";
import { 
    getProducts, 
    insertProduct, 
    deleteProduct , 
    updateProduct
} from "../connections/store.js";
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

        const insertedUUID = await insertProduct(db, product);
        console.log();
        
        res.status(200).json({"msg":"One product have been inserted!", insertedUUID});
    } catch (error) {
        console.log({error});
    }
}

const deleteOneProduct = async (req = request, res = response)=>{
    try {
        const { uuid } = req.body;
        const db = await createDB("./src/database/store.db");
        const deleted = await deleteProduct(db, uuid);
        
       if( deleted > 0 ){
            return res.json({"msg":"One product have been deleted", deletedUUID: uuid})
       };

       return res.json({"msg":`Nothing have been deleted!`})
      
    } catch (error) {
         console.log({error});
    }
}


const updateOneProduct = async(req = request, res = response)=>{
    try {
        const product = req.body;
    
        const db = await createDB("./src/database/store.db");
        const updated = await updateProduct(db, product);

        if( updated > 0 ){
            return res.json({"msg":"One product have been updated!", updatedUUID: product.uuid})
       };

       return res.json({"msg":`Nothing have been updated!`})
        
    } catch (error) {
        console.log({error});
    }
}

export{getAllProducts, insertProducts, deleteOneProduct, updateOneProduct}
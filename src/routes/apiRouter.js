import { Router } from "express";
import { 
    getAllProducts , 
    insertProducts, 
    deleteOneProduct,
    updateOneProduct
} from "../controllers/apiController.js";

import {validateProduct, validateUUID, validateUpdate } from "../middlewares/validates.js";

const apiRouter = Router();

apiRouter.get("/products", getAllProducts);

apiRouter.post("/products", validateProduct, insertProducts);

apiRouter.delete("/products",validateUUID,  deleteOneProduct);

apiRouter.put("/products",validateUpdate, validateUUID, updateOneProduct);

export default apiRouter;
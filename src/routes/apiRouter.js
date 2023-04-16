import { Router } from "express";
import { 
    getAllProducts , 
    insertProducts, 
    deleteOneProduct
} from "../controllers/apiController.js";

import {validateProduct, validateUUID } from "../middlewares/validates.js";

const apiRouter = Router();


apiRouter.get("/products", getAllProducts);

apiRouter.post("/products", validateProduct, insertProducts);

apiRouter.delete("/products",validateUUID,  deleteOneProduct);


export default apiRouter;
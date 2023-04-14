import { Router } from "express";
import { getAllProducts , insertProducts} from "../controllers/apiController.js";

import {validateProduct } from "../middlewares/validates.js";

const apiRouter = Router();


apiRouter.get("/products", getAllProducts);

apiRouter.post("/products", validateProduct, insertProducts);


export default apiRouter;
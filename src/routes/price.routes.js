import { Router } from "express";
import deletePrice from "../controllers/price.controller.js";

const priceRouter = Router();
priceRouter.route("/price/:id").delete(deletePrice);

export default priceRouter;

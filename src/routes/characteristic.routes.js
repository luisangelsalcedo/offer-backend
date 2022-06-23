import { Router } from "express";
import deleteCharacteristic from "../controllers/characteristic.controller.js";

const characteristicRouter = Router();

characteristicRouter.route("/characteristic/:id").delete(deleteCharacteristic);

export default characteristicRouter;

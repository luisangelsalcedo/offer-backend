import { Router } from "express";
import {
  findOffer,
  createNewOffer,
  getAllOffers,
  getOffer,
  updateOffer,
  deleteOffer,
  addNewCharacteristic,
  getAllCharacteristics,
  addNewPrice,
  getAllPrice,
} from "../controllers/offer.controller.js";

const offerRouter = Router();

offerRouter.param("id", findOffer);

offerRouter.route("/offer").get().post(createNewOffer).get(getAllOffers);

offerRouter
  .route("/offer/:id")
  .get(getOffer)
  .put(updateOffer)
  .delete(deleteOffer);

offerRouter
  .route("/offer/:id/characteristic")
  .post(addNewCharacteristic)
  .get(getAllCharacteristics);

offerRouter.route("/offer/:id/price").post(addNewPrice).get(getAllPrice);

export default offerRouter;

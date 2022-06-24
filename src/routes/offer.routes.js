import { Router } from "express";
import {
  findOffer,
  createNewOffer,
  getAllOffers,
  getOffer,
  updateOffer,
  deleteOffer,
  addNewCharacteristic,
  addNewPrice,
} from "../controllers/offer.controller.js";

const offerRouter = Router();
// find offer by primary key
offerRouter.param("id", findOffer);

// POST: create a new offer
// GET: get all offers
offerRouter.route("/offer").post(createNewOffer).get(getAllOffers);

// GET: get a offer by primary key
// PUT: update offer by primary key
// DELETE: delete offer by primary key
offerRouter
  .route("/offer/:id")
  .get(getOffer)
  .put(updateOffer)
  .delete(deleteOffer);

// POST: create a new characteristic by offer primary key
offerRouter.route("/offer/:id/characteristic").post(addNewCharacteristic);

// POST: create a new price by offer primary key
offerRouter.route("/offer/:id/price").post(addNewPrice);

export default offerRouter;

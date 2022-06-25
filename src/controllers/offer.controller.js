import {
  createOfferAsync,
  findOfferAsync,
  findByPkOfferAsync,
  updateOfferAsync,
  deleteOfferAsync,
  createCharacteristicAsync,
  createPriceAsync,
} from "../models/offer.model.js";
import successResponse from "../utils/successResponse.js";

const findOffer = async (req, res, next, id) => {
  try {
    const offer = await findByPkOfferAsync(id);
    req.offer = offer;
    next();
  } catch (error) {
    next(error);
  }
};
const createNewOffer = async (req, res, next) => {
  try {
    const result = await createOfferAsync(req);
    successResponse(res, 201, result, "Offer created");
  } catch (error) {
    next(error);
  }
};
const getAllOffers = async (req, res, next) => {
  try {
    const result = await findOfferAsync();
    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};
const getOffer = (req, res, next) => {
  try {
    const { offer } = req;
    successResponse(res, 200, offer);
  } catch (error) {
    next(error);
  }
};
const updateOffer = async (req, res, next) => {
  try {
    const result = await updateOfferAsync(req);
    successResponse(res, 200, result, "Updated offer");
  } catch (error) {
    next(error);
  }
};
const deleteOffer = async (req, res, next) => {
  try {
    const result = await deleteOfferAsync(req);
    successResponse(res, 200, result, "Delected offer");
  } catch (error) {
    next(error);
  }
};
const addNewCharacteristic = async (req, res, next) => {
  try {
    const result = await createCharacteristicAsync(req);
    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

const addNewPrice = async (req, res, next) => {
  try {
    const result = await createPriceAsync(req);
    successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

export {
  findOffer,
  createNewOffer,
  getAllOffers,
  getOffer,
  updateOffer,
  deleteOffer,
  addNewCharacteristic,
  addNewPrice,
};

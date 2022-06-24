import {
  createOfferAsync,
  findOfferAsync,
  findByPkOfferAsync,
  updateOfferAsync,
  deleteOfferAsync,
  createCharacteristicAsync,
  createPriceAsync,
} from "../models/offer.model.js";

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
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
const getAllOffers = async (req, res, next) => {
  try {
    const result = await findOfferAsync();
    if (!result.length) res.status(204).send();
    else res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const getOffer = (req, res, next) => {
  try {
    const { offer } = req;
    res.status(200).json(offer);
  } catch (error) {
    next(error);
  }
};
const updateOffer = async (req, res, next) => {
  try {
    const result = await updateOfferAsync(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const deleteOffer = async (req, res, next) => {
  try {
    const result = await deleteOfferAsync(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const addNewCharacteristic = async (req, res, next) => {
  try {
    const result = await createCharacteristicAsync(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addNewPrice = async (req, res, next) => {
  try {
    const result = await createPriceAsync(req);
    res.status(200).json(result);
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

import { deletePriceAsync } from "../models/price.model.js";

const deletePrice = async (req, res, next) => {
  try {
    const result = await deletePriceAsync(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default deletePrice;

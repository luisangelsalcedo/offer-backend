import { deletePriceAsync } from "../models/price.model.js";
import successResponse from "../utils/successResponse.js";

const deletePrice = async (req, res, next) => {
  try {
    const result = await deletePriceAsync(req);
    successResponse(res, 200, result, "Delected price");
  } catch (error) {
    next(error);
  }
};

export default deletePrice;

import { deleteCharacteristicAsync } from "../models/characteristic.model.js";
import successResponse from "../utils/successResponse.js";

const deleteCharacteristic = async (req, res, next) => {
  try {
    const result = await deleteCharacteristicAsync(req);
    successResponse(res, 200, result, "Delected characteristic");
  } catch (error) {
    next(error);
  }
};
export default deleteCharacteristic;

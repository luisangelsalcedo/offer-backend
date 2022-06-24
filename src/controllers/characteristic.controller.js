import { deleteCharacteristicAsync } from "../models/characteristic.model.js";

const deleteCharacteristic = async (req, res, next) => {
  try {
    const result = await deleteCharacteristicAsync(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export default deleteCharacteristic;

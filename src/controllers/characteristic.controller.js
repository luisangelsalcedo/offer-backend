const deleteCharacteristic = (req, res, next) => {
  try {
    res.send("deleteCharacteristic");
  } catch (error) {
    next(error);
  }
};
export default deleteCharacteristic;

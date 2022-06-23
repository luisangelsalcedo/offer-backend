const findOffer = (req, res, next, id) => {
  req.offer = id;
  next();
};
const createNewOffer = (req, res, next) => {
  try {
    res.send(`createNewOffer`);
  } catch (error) {
    next(error);
  }
};
const getAllOffers = (req, res, next) => {
  try {
    res.send(`getAllOffers`);
  } catch (error) {
    next(error);
  }
};
const getOffer = (req, res, next) => {
  try {
    res.send(`getOffer ${req.offer}`);
  } catch (error) {
    next(error);
  }
};
const updateOffer = (req, res, next) => {
  try {
    res.send(`updateOffer`);
  } catch (error) {
    next(error);
  }
};
const deleteOffer = (req, res, next) => {
  try {
    res.send(`deleteOffer`);
  } catch (error) {
    next(error);
  }
};
const addNewCharacteristic = (req, res, next) => {
  try {
    res.send(`addNewCharacteristic`);
  } catch (error) {
    next(error);
  }
};
const getAllCharacteristics = (req, res, next) => {
  try {
    res.send(`getAllCharacteristics`);
  } catch (error) {
    next(error);
  }
};
const addNewPrice = (req, res, next) => {
  try {
    res.send(`addNewPrice`);
  } catch (error) {
    next(error);
  }
};
const getAllPrice = (req, res, next) => {
  try {
    res.send(`getAllPrice`);
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
  getAllCharacteristics,
  addNewPrice,
  getAllPrice,
};

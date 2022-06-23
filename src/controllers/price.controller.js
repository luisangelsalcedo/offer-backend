const deletePrice = (req, res, next) => {
  try {
    res.send("deletePrice");
  } catch (error) {
    next(error);
  }
};

export default deletePrice;

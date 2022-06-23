const errorHandler = (error, req, res, next) => {
  const { message, name } = error;
  let { statusCode } = error;

  if (name === "ReferenceError") statusCode = 500;
  if (name === "ValidationError") statusCode = 422;

  res.json({ error: true, statusCode, message });
  next();
};

export default errorHandler;

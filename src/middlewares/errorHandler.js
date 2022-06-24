const errorHandler = (error, req, res, next) => {
  const { message } = error;
  let { statusCode } = error;

  if (!statusCode) statusCode = 500;

  res.json({ error: true, statusCode, message });
  next();
};

export default errorHandler;

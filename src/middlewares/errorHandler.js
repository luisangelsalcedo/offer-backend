const errorHandler = (error, req, res, next) => {
  const { name } = error;
  let { statusCode, message } = error;

  if (name === "SequelizeValidationError") {
    const [, second] = message.split(": ");
    message = second;
  }

  if (!statusCode) statusCode = 500;

  res.json({ error: true, statusCode, message });
  next();
};

export default errorHandler;

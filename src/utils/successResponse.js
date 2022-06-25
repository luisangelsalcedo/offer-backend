/**
 * ## successResponse
 * * Custom success response
 * @param {HTTPResponse} res - HTTP Response
 * @param {Number} statusCode
 * @param {String} message
 * @param {*} data
 * @returns
 */

const successResponse = (res, statusCode, data = null, message = null) => {
  const response = {};

  if (data) response.data = data;
  if (message) response.message = message;
  return res
    .status(statusCode)
    .json({ success: true, ...response, statusCode });
};

export default successResponse;

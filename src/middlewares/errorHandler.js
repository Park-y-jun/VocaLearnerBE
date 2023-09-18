const { BadRequest, Unauthorized, Forbidden, NotFound} = require('../errors/index')

const errorHandler = (err, req, res, next) => {
  if (
    err instanceof BadRequest || err instanceof Unauthorized ||
    err instanceof Forbidden || err instanceof NotFound
  ) {
    res.status(err.code).json({ description: err.data });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = errorHandler
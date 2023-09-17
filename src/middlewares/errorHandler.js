const { BadRequest, Unauthorized, Forbidden, NotFound} = require('../errors/index')

const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err instanceof BadRequest) {
    res.status(err.code).json({ error: err.message });
  } else if (err instanceof Unauthorized) {
    res.status(err.code).json({ error: err.message });
  } else if (err instanceof Forbidden) {
    res.status(err.code).json({ error: err.message });
  } else if (err instanceof NotFound) {
    res.status(err.code).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = errorHandler
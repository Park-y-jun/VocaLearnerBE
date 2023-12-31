const jwt = require("jsonwebtoken");
const { BadRequest, Unauthorized, Forbidden, NotFound } = require("../errors");

const verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      next(new Unauthorized("invalid_authorization"));
    }

    const [bearer, token] = authorization.split(" ");
    const bearerSet = new Set(["Bearer", "bearer", "BEARER"]);

    if (!bearerSet.has(bearer)) {
      next(new Unauthorized("invalid_bearer"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      next(new Unauthorized("Token Expired"));
    } else {
      next(new Unauthorized("invalid_credentials"));
    }
  }

};

module.exports = verifyToken;

const jwt = require("jsonwebtoken");
const { BadRequest, Unauthorized, Forbidden, NotFound} = require('../errors')

const verifyToken = (req, res, next) => {
  try{
  const { authorization } = req.headers;

  if(!authorization) {
    throw new Unauthorized("invalid_credentials");
  }
  
  const [bearer, token] = authorization.split(" ");
  const bearerSet = new Set(["Bearer", "bearer", "BEARER"]);

  if(!bearerSet.has(bearer)) {
    throw new Unauthorized("invalid_credentials");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;

  next();
  
} catch (error){
  if(error.name === "TokenExpiredError") {
    throw new Unauthorized("Token Expired");
  }

  throw new Unauthorized("invalid_credentials");
}
};

module.exports = verifyToken;
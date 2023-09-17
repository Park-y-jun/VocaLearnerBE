const { BadRequest, Unauthorized, Forbidden, NotFound} = require("../errors/index");

const validateRequestBody = (properties) => (req, res, next) => {
  const missingProps = properties.filter((prop) => !req.body[prop]);
 
    if (missingProps.length > 0) {
      throw new BadRequest({ data: "Invalid request" });
    }
   
  }
  

  // if (missingProps.length > 0) {
  //   throw new BadRequest({ data: "Invalid request" });
  // } else {
  //   next()
  // }


module.exports = validateRequestBody
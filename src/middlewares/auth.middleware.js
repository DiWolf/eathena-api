const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../common");

module.exports = async function (req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    const error = new Error();
    error.message = "Token no enviado";
    error.status = 400;
    throw error;
  }

  jwt.verify(token, process.env.JWT_SECRET, function (err, decodedToken) {
    if (err) {
      const error = new Error();
      (error.message = "Token no válido o expirado"), (error.status = 401);
      throw error;
    }
   
    const { account_id, userid, level } = decodedToken;
    req.auth = { account_id, userid, level };

    next();
  });
};

const jwt = require("jsonwebtoken");

const generarJWT = (account_id, userid, level) => {
  return new Promise((resolve, reject) => {
    const payload = { account_id, userid, level };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) {
          reject("Token no generado");
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};

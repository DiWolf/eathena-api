//Determina si el rol es un administrador
module.exports.esAdministrador = async function (req, res, next) {
  let login =
    req.profile &&
    req.auth &&
    req.profile.account_id === req.auth.account_id &&
    req.profile.level > 90 &&
    req.auth.level > 90;
  if (!login) {
    return res.status(400).json({
      error: "No tienes permitido realizar esta acción",
    });
  }
  next();
};

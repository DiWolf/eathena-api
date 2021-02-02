import { Router } from "express";
const {
  AuthMiddleware,
  ValidarUsuarioMiddleware,
  AdminMiddleware,
} = require("../middlewares/index");
module.exports = function ({ LoginController }: any) {
  const router = Router();

  router.get(
    "/:account_id",
    [AuthMiddleware, ValidarUsuarioMiddleware, AdminMiddleware.esAdministrador],
    LoginController.getAllAccounts
  );

  //Busqueda
  router.get(
    "/:account_id/buscar",
    [AuthMiddleware, ValidarUsuarioMiddleware, AdminMiddleware.esAdministrador],
    LoginController.searchAccounts
  );

  return router;
};

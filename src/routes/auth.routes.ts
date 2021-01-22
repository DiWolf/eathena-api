import { Router } from "express";
const {
  AuthMiddleware,
  ValidarUsuarioMiddleware,
  AdminMiddleware,
} = require("../middlewares/index");
module.exports = function ({ AuthController }: any) {
  const router = Router();

  router.post("/", AuthController.authenticate);
  router.get("/renovar", AuthMiddleware, AuthController.renovarToken);

  return router;
};

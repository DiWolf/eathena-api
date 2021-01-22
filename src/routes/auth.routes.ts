import { Router } from "express";
module.exports = function ({AuthController}: any) {
  const router = Router();

  router.post("/", AuthController.authenticate);

  return router;
};

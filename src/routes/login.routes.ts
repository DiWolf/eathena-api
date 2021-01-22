import { Router } from "express";
module.exports = function ({ LoginController }) {
  const router = Router();

  router.get("/", LoginController.getAllAccounts);

  return router;
};

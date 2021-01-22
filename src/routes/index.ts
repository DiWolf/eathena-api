import express from "express";
const cors = require("cors");
import helmet from "helmet";
const compression = require("compression");
require("express-async-errors");
const { ErrorMiddleware } = require("../middlewares");
module.exports = function ({ LoginRoutes, AuthRoutes }: any) {
  const crm = express.Router();
  const router = express.Router();

  crm.use(express.json()).use(cors()).use(helmet()).use(compression());

  crm.use("/login", LoginRoutes);
  crm.use("/auth", AuthRoutes);
  router.use("/v1/api", crm);
  router.use(ErrorMiddleware);
  return router;
};

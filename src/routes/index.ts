import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

module.exports = function ({ LoginRoutes }) {
  const crm = express.Router();
  const router = express.Router();

  crm.use(express.json()).use(cors()).use(helmet()).use(compression());

  crm.use("/login", LoginRoutes);
  router.use("/v1/api", crm);
  return router;
};

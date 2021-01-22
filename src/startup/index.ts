// import { Express } from "express";
const Express = require("express");
let _express: any = null;
let _config: any = null;

export default class Server {
  constructor({ config = null, router = null }) {
    _config = config;
    _express = Express().use(router);
  }

  start() {
    return new Promise<void>((resolve) => {
      _express.listen(_config.PORT, () => {
        console.log(
          _config.APPLICATION_NAME + " API running on port " + _config.PORT
        );

        resolve();
      });
    });
  }
}

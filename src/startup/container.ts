import { createContainer, asClass, asValue, asFunction } from "awilix";

import Server from "./index";
const config = require("../common/index");
//Repositorios
import { LoginRespository } from "../repositories/index";

//servicios
import { LoginService } from "../services/index";

//Controladores
import { LoginController } from "../controllers/index";

const {  LoginRoutes } = require("../routes/index.routes");

//Ruta
const Ruta = require("../routes/index");
const container = createContainer();

container
  .register({
    app: asClass(Server).singleton(),
    router: asClass(Ruta).singleton(),
    config: asValue(config),
  })
  //Registrar servicios
  .register({
    LoginService: asClass(LoginService).singleton(),
  })
  .register({
    LoginController: asClass(LoginController.bind(LoginController)).singleton(),
  })
  .register({
    LoginRoutes: asFunction(LoginRoutes).singleton(),
  })

  //Repositorios
  .register({
    LoginRepository: asClass(LoginRespository).singleton(),
  });

module.exports = container;

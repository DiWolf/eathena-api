import { createContainer, asClass, asValue, asFunction } from "awilix";

import Server from "./index";
const config = require("../common/index");
//Repositorios
import { LoginRespository, AuthRepositorySql } from "../repositories/index";

//servicios
import { LoginService, AuthService } from "../services/index";

//Controladores
import { LoginController, AuthController } from "../controllers/index";

const { LoginRoutes, AuthRoutes } = require("../routes/index.routes");

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
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    LoginController: asClass(LoginController.bind(LoginController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    LoginRoutes: asFunction(LoginRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })

  //Repositorios
  .register({
    LoginRepository: asClass(LoginRespository).singleton(),
    AuthRepositorySql: asClass(AuthRepositorySql).singleton(),
  });

module.exports = container;

import { createContainer, asClass, asValue, asFunction } from "awilix";

import Server from "./index";
const config = require("../common/index");
//Repositorios
import Repositorys from "../repositories/index";

//servicios
import Services from "../services/index";

//Controladores
import Controllers from "../controllers/index";

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
    LoginService: asClass(Services.LoginService).singleton(),
    AuthService: asClass(Services.AuthService).singleton(),
  })
  .register({
    LoginController: asClass(
      Controllers.LoginController.bind(Controllers.LoginController)
    ).singleton(),
    AuthController: asClass(
      Controllers.AuthController.bind(Controllers.AuthController)
    ).singleton(),
  })
  .register({
    LoginRoutes: asFunction(LoginRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })

  //Repositorios
  .register({
    LoginRepository: asClass(Repositorys.LoginRespository).singleton(),
    AuthRepositorySql: asClass(Repositorys.AuthRepositorySql).singleton(),
  });

module.exports = container;

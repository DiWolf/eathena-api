const container = require("./src/startup/container");
const server = container.resolve("app");

server
  .start()
  .then((result: any) => {
    console.log(`Sistema conectado ${result}`);
  })
  .catch((err: any) => {
    console.log(`Error en el sistema ${err}`);
  });

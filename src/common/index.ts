if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({});
}

module.exports = {
  PORT: process.env.PORT,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_HOST: process.env.MYSQL_HOST,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  CACHE_KEY: process.env.CACHE_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
};

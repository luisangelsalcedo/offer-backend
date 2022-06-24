import { Sequelize } from "sequelize";
import config from "../config/index.js";

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: "mysql",
  }
);

try {
  await sequelize.authenticate();
  console.log("Database is connected.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;

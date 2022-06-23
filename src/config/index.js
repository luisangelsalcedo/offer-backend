import dotenv from "dotenv";
import path from "path";

// config environments
const nodeEnv = process.env.NODE_ENV || "";
const varEnv = path.resolve(process.cwd(), `./env/${nodeEnv}.env`);
dotenv.config({
  path: varEnv,
});

const config = {
  port: "3000",
  mysql: {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
  },
};

export default config;

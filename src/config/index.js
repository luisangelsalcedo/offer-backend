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
    dbhost: process.env.DBHOST,
    dbuser: process.env.DBUSER,
    dbpassword: process.env.DBPASSWORD,
    db: process.env.DATABASE,
  },
};

export default config;

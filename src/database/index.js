import mysql from "mysql";
import { promisify } from "util";
import config from "../config/index.js";

const pool = mysql.createPool(config.mysql);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST")
      console.error("Database connection was closed");

    if (err.code === "ER_CON_COUNT_ERROR")
      console.error("Database has to many connections");

    if (err.code === "ENONNREFUSED")
      console.error("Database connection was refused");
  }
  if (connection) connection.release();
  console.log("Database is connected");
});

// promisify pool querys
pool.query = promisify(pool.query);

export default pool;

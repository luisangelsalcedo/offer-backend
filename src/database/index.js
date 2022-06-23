import mysql from "mysql";
import config from "../config/index.js";

const connection = mysql.createConnection({
  host: config.mysql.dbhost,
  user: config.mysql.dbuser,
  password: config.mysql.dbpassword,
  database: config.mysql.db,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

import express from "express";
import morgan from "morgan";
import "../database/index.js";

const app = express();

// midleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.send("hola mundo");
});

export default app;

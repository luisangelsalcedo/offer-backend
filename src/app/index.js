import express from "express";
import morgan from "morgan";
import "../database/index.js";
import {
  characteristicRouter,
  offerRouter,
  priceRouter,
} from "../routes/index.js";

const app = express();

// midleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// template

// routes
app.use("/api", offerRouter);
app.use("/api", characteristicRouter);
app.use("/api", priceRouter);
app.get("/", (req, res) => {
  res.send("hola mundo");
});

export default app;

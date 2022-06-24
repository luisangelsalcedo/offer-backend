import express from "express";
import morgan from "morgan";
import errorHandler from "../middlewares/errorHandler.js";
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
app.get("/", async (req, res) => {
  res.send("Hola mundo");
});

// error handler
app.use(errorHandler);

export default app;

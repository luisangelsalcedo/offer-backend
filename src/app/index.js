import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "../middlewares/errorHandler.js";

import {
  characteristicRouter,
  offerRouter,
  priceRouter,
} from "../routes/index.js";

const app = express();

app.use(cors());

// midleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// template
app.use(express.static("public")); // directory to serve static files
app.set("views", "./src/views"); // views directory
app.set("view engine", "ejs"); // register the template engine

// routes
app.use("/api", offerRouter);
app.use("/api", characteristicRouter);
app.use("/api", priceRouter);
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

// error handler
app.use(errorHandler);

export default app;

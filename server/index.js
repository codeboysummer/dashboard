import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import client from "./routes/client.js";
import management from "./routes/management.js";
import general from "./routes/general.js";
import sales from "./routes/sales.js";

//  config

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes

app.use("/client", client);
app.use("general", general);
app.use("management", management);
app.use("sales", sales);

// mongoose setup

const port = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(port,()=>console.log(`server started on ${port}`));
  })
  .catch((err) => {
    console.log("Error connecting to the database: ", err);
  });


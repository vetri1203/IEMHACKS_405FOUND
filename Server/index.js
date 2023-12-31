import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "../Server/router/auth.js";
import passRouter from "../Server/router/password.js";
// import Route from './Routes/Routes.js';
import { Recruitment } from "./controller/JobRecruitment.js";
import { JobSeeking } from "./controller/JobSeeking.js";
import { CrowdFunding } from "./controller/CrowdFund.js";
import { search } from "./controller/Search.js";
import { AboutCompany } from "./controller/AboutCompany.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/admins");
    // connect(process.env.MONGO); //

    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(Route)
app.use("/api/auth", authRouter);
app.use("/api/pass", passRouter);

app.post("/job", Recruitment);
app.post("/apply", JobSeeking);
app.post("/fund", CrowdFunding);
app.post("/search", search);
app.post("/about", AboutCompany);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is Running On The Port ${process.env.PORT}`);
  connect();
});

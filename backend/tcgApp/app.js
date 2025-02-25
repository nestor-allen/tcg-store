import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import productRouter from "./routes/products.js"
import authRouter from "./routes/auth.js"

dotenv.config();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/products", productRouter)
app.use("/api/auth",authRouter)

app.use(express.static(path.resolve("public")));

export default app;

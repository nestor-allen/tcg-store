import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

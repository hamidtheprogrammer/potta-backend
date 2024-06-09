import express from "express";
import { connectDB } from "./database/dbConnection.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routers/productRoutes.js";
import { populatedb } from "./controllers/productControllers.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(productRoutes);

await connectDB();
// populatedb();

app.listen(8000, () => {
  console.log("SERVER UP!!!!");
});

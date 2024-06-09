import { Router } from "express";
import {
  addProducts,
  getCategoryBasedProducts,
  getProducts,
} from "../controllers/productControllers.js";
import cors from "cors";

const productRoutes = Router();

const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5173",
  "https://potta-eight.vercel.app/",
];

productRoutes.use(
  cors({
    credentials: true,
    origin: "*",
    //  function (origin, callback) {
    //   // Check if the origin is in the allowed origins array
    //   if (allowedOrigins.includes(origin) || !origin) {
    //     callback(null, true);
    //   } else {
    //     callback(new Error("Not allowed by CORS"));
    //   }
    // },
  })
);

productRoutes.route("/shop").get(getProducts);
productRoutes.route("/shop/:category").get(getCategoryBasedProducts);

export default productRoutes;

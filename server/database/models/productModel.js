import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    subCategory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategories",
      required: true,
    },
    price: { type: Number, required: true, unique: true },
    quantity: { type: Number, required: true },
    img: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { Timestamp: true }
);

const categorySchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { Timestamp: true }
);

const subCategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { Timestamp: true }
);

// const test = {
//   id: 1,
//   name: "Elegant Gold Necklace",
//   category: "necklace",
//   subCategory: "gold",
//   price: 120.0,
//   quantity: 10,
//   img: "https://images.unsplash.com/photo-1656428361240-47e1737b7dce?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// };
const productModel = mongoose.model("products", productSchema);
const categoryModel = mongoose.model("categories", categorySchema);
const subCategoryModel = mongoose.model("subcategories", subCategorySchema);

export { productModel, categoryModel, subCategoryModel };

import {
  categoryModel,
  productModel,
  subCategoryModel,
} from "../database/models/productModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const getProducts = asyncHandler(async (req, res) => {
  try {
    const allProducts = await productModel.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.statuse(404);
    throw new Error(error);
  }
});

const addProducts = asyncHandler(async (req, res) => {
  const { name, price, quantity, img } = req.body;

  if (!name || !price || !quantity || !img) {
    res.status(404).send("Invalid details");
  }
  try {
    const newProduct = productModel({ name, price, quantity, img });
    if (newProduct) {
      const savedProduct = await newProduct.save();

      res.status(200).json({
        product: savedProduct.name,
      });
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

const populatedb = async () => {
  const categories = [
    { name: "necklace" },
    { name: "bracelet" },
    { name: "earring" },
  ];

  const subCategories = [
    { name: "gold" },
    { name: "beaded" },
    { name: "pendant" },
    { name: "charm" },
    { name: "cuff" },
    { name: "stud" },
    { name: "hoop" },
    { name: "dangle" },
  ];

  try {
    const category = await categoryModel.insertMany(categories);

    const subCategory = await subCategoryModel.insertMany(subCategories);

    const addedProducts = await productModel.insertMany([
      {
        name: "Elegant Gold Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[0]._id,
        price: 120.0,
        quantity: 10,
        img: "https://images.unsplash.com/photo-1656428361240-47e1737b7dce?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Classic Gold Chain",
        category_id: category[0]._id,
        subCategory_id: subCategory[0]._id,
        price: 135.0,
        quantity: 5,
        img: "https://images.unsplash.com/photo-1703034390242-1174e133db0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gold Choker Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[0]._id,
        price: 145.0,
        quantity: 8,
        img: "https://images.unsplash.com/photo-1659708722557-3804cf131098?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Colorful Beaded Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[1]._id,
        price: 75.0,
        quantity: 12,
        img: "https://plus.unsplash.com/premium_photo-1691411182134-d4f3c7b8f976?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Bohemian Beaded Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[1]._id,
        price: 90.0,
        quantity: 7,
        img: "https://images.unsplash.com/photo-1624634355708-787964b199ae?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Vintage Beaded Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[1]._id,
        price: 85.0,
        quantity: 9,
        img: "https://images.unsplash.com/photo-1625792508272-bc6ad2788b14?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Heart Pendant Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[2]._id,
        price: 100.0,
        quantity: 15,
        img: "https://plus.unsplash.com/premium_photo-1681276170758-d6ca6e6e276a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Crystal Pendant Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[2]._id,
        price: 110.0,
        quantity: 6,
        img: "https://images.unsplash.com/photo-1684616290886-ac0e8ec5e91a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVuZGFudCUyMG5lY2tsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Pearl Pendant Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[2]._id,
        price: 125.0,
        quantity: 4,
        img: "https://images.unsplash.com/photo-1684616290854-5dab068d8ba2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Star Pendant Necklace",
        category_id: category[0]._id,
        subCategory_id: subCategory[2]._id,
        price: 95.0,
        quantity: 11,
        img: "https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Silver Charm Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[3]._id,
        price: 80.0,
        quantity: 14,
        img: "https://images.unsplash.com/photo-1647638162212-51180c35deae?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gold Charm Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[3]._id,
        price: 130.0,
        quantity: 10,
        img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcm0lMjBicmFjZWxldHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Rose Gold Charm Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[3]._id,
        price: 95.0,
        quantity: 7,
        img: "https://images.unsplash.com/photo-1650785468226-e415afc2bd9e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Colorful Beaded Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[1]._id,
        price: 60.0,
        quantity: 20,
        img: "https://images.unsplash.com/photo-1667138410703-f43ce0ce7542?q=80&w=855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Bohemian Beaded Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[1]._id,
        price: 70.0,
        quantity: 15,
        img: "https://images.unsplash.com/photo-1534976618208-4833d5b57d08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Vintage Beaded Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[1]._id,
        price: 65.0,
        quantity: 12,
        img: "https://images.unsplash.com/photo-1528319355578-ebbbc586afac?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Silver Cuff Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[4]._id,
        price: 125.0,
        quantity: 9,
        img: "https://images.unsplash.com/photo-1691991054594-c64b364a9fab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gold Cuff Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[4]._id,
        price: 145.0,
        quantity: 5,
        img: "https://images.unsplash.com/photo-1586878340506-af074f2ee999?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Bronze Cuff Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[4]._id,
        price: 110.0,
        quantity: 8,
        img: "https://images.unsplash.com/photo-1700143147538-5b7d82e3f8c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Leather Cuff Bracelet",
        category_id: category[1]._id,
        subCategory_id: subCategory[4]._id,
        price: 105.0,
        quantity: 11,
        img: "https://images.unsplash.com/photo-1604955619976-b492c82da57b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Diamond Stud Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[5]._id,
        price: 150.0,
        quantity: 5,
        img: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Pearl Stud Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[5]._id,
        price: 85.0,
        quantity: 12,
        img: "https://images.unsplash.com/photo-1573227895118-8f8fa1172a09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gold Stud Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[5]._id,
        price: 110.0,
        quantity: 8,
        img: "https://images.unsplash.com/photo-1680789526908-782654d363ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Silver Hoop Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[6]._id,
        price: 90.0,
        quantity: 15,
        img: "https://images.unsplash.com/photo-1659727640714-7e9a1d8b31cb?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gold Hoop Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[6]._id,
        price: 125.0,
        quantity: 10,
        img: "https://images.unsplash.com/photo-1590448310326-04731dc2d18f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vcCUyMGVhcnJpbmdzfGVufDB8fDB8fHww",
      },
      {
        name: "Rose Gold Hoop Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[6]._id,
        price: 105.0,
        quantity: 7,
        img: "https://images.unsplash.com/photo-1653436773973-9563a96bf8cf?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Crystal Dangle Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[7]._id,
        price: 95.0,
        quantity: 11,
        img: "https://images.unsplash.com/photo-1653083150294-071be29d3da0?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Bohemian Dangle Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[7]._id,
        price: 75.0,
        quantity: 14,
        img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Vintage Dangle Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[7]._id,
        price: 120.0,
        quantity: 6,
        img: "https://images.unsplash.com/photo-1653083210739-7cc5cf95f6ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Geometric Dangle Earrings",
        category_id: category[2]._id,
        subCategory_id: subCategory[7]._id,
        price: 100.0,
        quantity: 9,
        img: "https://images.unsplash.com/photo-1590156118437-baa48141e3be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ]);

    console.log(addedProducts);
  } catch (error) {
    console.log(error);
  }
};

const filterProducts = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const { subcategory, price } = req.query;

  let filters = {};

  if (category) filters.category = category;
  if (subcategory) filters.category = subcategory;
  if (price) filters.category = price;

  try {
    const filtered = await productModel.find(filters);
    res.status(200).send(filtered);
  } catch (error) {
    res.status(404).send(error);
  }
});

const getCategoryBasedProducts = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const filter = { "category.name": category };

  try {
    const result = await productModel.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: {
          path: "$category",
        },
      },
      {
        $lookup: {
          from: "subcategories",
          localField: "subCategory_id",
          foreignField: "_id",
          as: "subcategory",
        },
      },
      {
        $unwind: {
          path: "$subcategory",
        },
      },
      {
        $match: { "category.name": category },
      },
    ]);

    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

export { getProducts, addProducts, populatedb, getCategoryBasedProducts };

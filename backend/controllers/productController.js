import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({
      message: "Failed to get products",
      error: err,
    });
  }
}

export function saveProducts(req, res) {
  if (!isAdmin(req)) {
    res.status(403).json({
      message: "You are not authorized to add a product",
    });
    return;
  }

  const product = new Product(req.body);

  product
    .save()
    .then(() => {
      res.json({
        message: "Product saved successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "Product not saved",
      });
    });
}

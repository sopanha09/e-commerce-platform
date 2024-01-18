import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
import { Mongoose } from "mongoose";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;

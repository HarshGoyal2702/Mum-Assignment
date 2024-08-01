import express from "express";
const router = express.Router();
import { isAuthenticated } from "../middlewares/auth.js";
import { getAdminProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js"


router.route("/products").get(isAuthenticated, getAdminProducts);
router.route("/new").post(isAuthenticated, createProduct);
router.route("/:id").put(isAuthenticated, updateProduct).delete(isAuthenticated, deleteProduct)

export default router;
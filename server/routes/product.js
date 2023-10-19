const express = require("express");
const router = express.Router();
import { verifyToken } from "../middleware/auth.js";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.js";

router.post("/", verifyToken, createProduct);
router.get("/", verifyToken, getProducts);
router.put("/:id", verifyToken, updateProduct);
router.delete("/:id", verifyToken, deleteProduct);

module.exports = router;
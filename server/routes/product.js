const express = require("express");

const router = express.Router();
const  { createProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/product.js");

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
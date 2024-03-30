const Product = require ("../models/product.js");


const createProduct = async (req, res) => {
    const { name, category, quantity, price, description } = req.body;
  
    if (!name || !category || !quantity || !price || !description) {
      res.status(400);
      throw new Error("Please fill in all fields");
    }
    
    const product = await Product.create({
      name,
      category,
      quantity,
      price,
      description,
    });
  
    res.status(201).json(product);
  }

  const getProducts = async (req, res) => {
    const products = await Product.find({ user: req.user.id }).sort("-createdAt");
    res.status(200).json(products);
  }

  const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    if (product.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
    res.status(200).json(product);
  }

  const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
   
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    if (product.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
    await product.remove();
    res.status(200).json({ message: "Product deleted." });
  }
  
  

 
 
const updateProduct = async (req, res) => {
    const { name, category, quantity, price, description } = req.body;
    const { id } = req.params;
  
    const product = await Product.findById(id);
  
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    
    if (product.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
  
    
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        name,
        category,
        quantity,
        price,
        description,
      },
    );
  
    res.status(200).json(updatedProduct);
  }

  module.exports = { createProduct, getProducts,updateProduct, getProduct, deleteProduct };
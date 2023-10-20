import React, { useState } from "react";
import {products} from '../data/products'

const Inventory = () => {
  const [productList, setProductList] = useState(products);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: 0,
    quantity: 0,
  });


  console.log(productList);

  const handleQuantityChange = (productId, newQuantity) => {
    
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    
    setProductList((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price > 0) {
      const newProductId = Date.now().toString();

      const newProductData = {
        _id: newProductId,
        ...newProduct,
      };

      setProductList((prevProducts) => [...prevProducts, newProductData]);

      setNewProduct({
        name: "",
        category: "",
        price: 0,
        quantity: 0,
      });
    }
  };

  return (
    <div className="p-4 space-y-4">
    <h2 className="text-lg font-semibold text-gray-800">Product Inventory</h2>
    <ul className="divide-y divide-gray-200">
      {productList.map((product) => (
        <li key={product._id} className="py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <p className="font-semibold">{product.name}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={product.quantity}
              onChange={(e) =>
                handleQuantityChange(product._id, e.target.value)
              }
            />
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>

    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800">Add New Product</h2>
      <form>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: +e.target.value })}
          />
          <button
            type="button"
            onClick={handleAddProduct}
            className="bg-green-500 w-40 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Inventory;





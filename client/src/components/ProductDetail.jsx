
import React from "react";
import { useParams } from "react-router-dom";
import {products} from '../data/products'

const ProductDetail = () => {
  const { productId } = useParams();  
  console.log(productId);
  console.log(products);
  const product = products.find((product) => product._id == productId);

  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;


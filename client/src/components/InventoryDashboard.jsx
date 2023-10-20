import React from 'react';
import { useNavigate } from 'react-router';
import {products} from '../data/products'


function InventoryDashboard( ) {
  const navigate = useNavigate();

  const handleClickProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

 
  const totalProductValue = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const outOfStockCategories = products.reduce((categories, product) => {
    if (product.quantity=== 0 && !categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  }, []);

  return (
    <div className="p-4 space-y-4">
      
      <div className="bg-blue-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-blue-800">Total Products</h2>
        <p className="text-4xl font-bold text-blue-800">{products.length}</p>
      </div>

      
      <div className="bg-green-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-green-800">Total Product Value</h2>
        <p className="text-4xl font-bold text-green-800">${totalProductValue}</p>
      </div>

      
      <div className="bg-red-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-red-800">Out of Stock Categories</h2>
        <ul className="list-disc ml-6 text-red-800">
          {outOfStockCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>

      
      <div className="p-4 space-y-4">
     
      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product._id} className="py-2">
            <div
              onClick={() => handleClickProduct(product._id)}
              className="cursor-pointer"
            >
              <p className="font-semibold">{product.name}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default InventoryDashboard;

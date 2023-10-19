import React from 'react';



function InventoryDashboard( {products}) {
 
  const totalProductValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );

  const outOfStockCategories = products.reduce((categories, product) => {
    if (product.stock === 0 && !categories.includes(product.category)) {
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

      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800">Product List</h2>
        <ul className="divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product.id} className="py-2">
              <p className="font-semibold">{product.name}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InventoryDashboard;

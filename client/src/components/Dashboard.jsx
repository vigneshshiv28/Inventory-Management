import React from "react";
import Navbar from "./Navbar";
import InventoryDashboard from "./InventoryDashboard";

const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category A',
      price: 10,
      stock: 15,
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category B',
      price: 20,
      stock: 0,
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category A',
      price: 15,
      stock: 8,
    },
  ];

export default function Dashboard() {
    return (
        <>
         <Navbar />
         <InventoryDashboard products={products} />
        </>
    );
}
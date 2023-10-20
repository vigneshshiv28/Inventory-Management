import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import User from './components/User';
import InventoryList from './components/InventoryList';
import ProductDetail from './components/ProductDetail';

const products = [
    
  {
    _id: 1,
    name: 'Product 1',
    category: 'Category A',
    price: 10,
    quantity: 15,
    description: 'Sample description for Product 1',
  },
  {
    _id: 2,
    name: 'Product 2',
    category: 'Category B',
    price: 20,
    quantity: 0,
    description: 'Sample description for Product 2',
  },
  {
    _id: 3,
    name: 'Product 3',
    category: 'Category A',
    price: 15,
    quantity: 8,
    description: 'Sample description for Product 3',
  },
]

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/inventory" element={<InventoryList/>}/>
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
      
      
    );
}

export default App;

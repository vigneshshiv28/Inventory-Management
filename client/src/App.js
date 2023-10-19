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
import Inventory from './components/Inventory';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
      
      
    );
}

export default App;

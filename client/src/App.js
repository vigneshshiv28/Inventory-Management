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

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
      
    );
}

export default App;

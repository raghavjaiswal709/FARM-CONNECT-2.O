import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from './context/auth';
import 'antd/dist/reset.css';
import SearchInput from './components/SearchInput/SearchInput';
import { SearchProvider } from './context/search';
import { CartProvider } from "./context/Cart.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
    <SearchProvider>
      <CartProvider>
        {/* <BrowserRouter> */}
          <App />
        {/* </BrowserRouter> */}
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
    
    
);



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage';
import { CartPage } from './pages/CartPage/CartPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

const[cartItems, setCartItems] = useState(0);

const handleCartItems = () =>{
  setCartItems(cartItems+1);
}

  return (
    <BrowserRouter>
      <Layout cartItems={handleCartItems} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

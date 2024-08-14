import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./clients/pages/Home";
import About from "./clients/pages/About";
import Contact from "./clients/pages/Contact";
import Product from "./clients/pages/Product";
import Notfound from "./clients/pages/404";
import Navbar from "./clients/components/Navbar";
import Footer from "./clients/components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./clients/components/ProductDetails";
import Cart from "./clients/pages/Cart";
import Login from "./clients/pages/Login";
import Register from "./clients/pages/Register";
import { CartProvider } from './clients/context/CartContext';
import { ToastContainer } from 'react-toastify';
import Checkout from "./clients/pages/Checkout";

const App = () => {
  return (
    <section className="">
      <CartProvider>
      <ToastContainer
      position="top-center" 
      autoClose={2000} 
      />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
      </CartProvider>
    </section>
  );
};

export default App;

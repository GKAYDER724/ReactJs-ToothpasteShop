import React from "react";
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


const App = () => {
  return (
    <section className="">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>

      <Footer />
    </section>
  );
};

export default App;

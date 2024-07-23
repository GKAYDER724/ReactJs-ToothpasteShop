import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React, { Suspense, useEffect } from 'react'
import { CSpinner, useColorModes } from '@coreui/react'
// import './scss/style.scss'
import Home from "./clients/pages/Home";
import About from "./clients/pages/About";
import Contact from "./clients/pages/Contact";
import Product from "./clients/pages/Product";
import Notfound from "./clients/pages/404";
import Navbar from "./clients/components/Navbar";
import Footer from "./clients/components/Footer";
import ProductDetails from "./clients/components/ProductDetails";
import Cart from "./clients/pages/Cart";

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./admin/views/pages/login/Login'))
const Register = React.lazy(() => import('./admin/views/pages/register/Register'))
const Page404 = React.lazy(() => import('./admin/views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./admin/views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <section className="">
      <Navbar />

      <main>
         <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
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





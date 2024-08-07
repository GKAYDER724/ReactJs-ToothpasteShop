import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
// import './scss/style.scss'
// clients
import Home from './pages/clients/Home' // Sửa dấu nháy đơn và xóa dấu chấm phẩy
import About from './pages/clients/About'
import Contact from './pages/clients/Contact'
import Product from './pages/clients/Product'
import Notfound from './pages/clients/404'
import Navbar from './components/clients/Navbar'
import Footer from './components/clients/Footer'
import Login from './components/clients/Login'
import Signup from './components/clients/Signup'
import ProductDetails from './components/clients/ProductDetails'
import Cart from './pages/clients/Cart'
//admin
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
// Pages
const Logins = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>

      <Footer />
    </section>
  )
}

export default App

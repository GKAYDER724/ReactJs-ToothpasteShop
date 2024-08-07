import React from 'react'
import { useState, useEffect, useRef } from 'react'
import SingleProduct from '../../components/clients/SingleProduct'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)
  const [catPath, setCatPath] = useState('Tất cả sản phẩm')

  const para = useRef(null)

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        setIsLoading(true)

        // Lấy sản phẩm từ API
        const productRes = await fetch('http://localhost:4000/api/product')
        if (!productRes.ok) throw new Error('Failed to fetch products')
        const productJson = await productRes.json()
        setProducts(productJson)
        setFilterProducts(productJson)

        // Lấy danh mục từ API
        const categoryRes = await fetch('http://localhost:4000/api/categories')
        if (!categoryRes.ok) throw new Error('Failed to fetch categories')
        const categoryJson = await categoryRes.json()
        setCategories(categoryJson.map((cat) => cat.name))

        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        setErr(err.message)
      }
    }
    fetchProductsAndCategories()
  }, [])

  if (isLoading)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">Đang tải...</p>
    )
  if (err)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">
        <span>{err}</span>
        <Link to="/product" className="text-lg text-gray-500 font-semibold">
          &larr;Tải lại trang
        </Link>
      </p>
    )

  return (
    <div className="container mx-auto pb-20">
      <h2 className="text-center text-3xl py-10">Tất cả sản phẩm</h2>
      <div className="flex justify-between gap-10">
        <div className="w-[20%] bg-gray-50 flex flex-col gap-3 px-3 pt-2">
          <h3
            className="select-none cursor-pointer flex justify-between"
            onClick={() => {
              setFilterProducts(products)
              setCatPath('Tất cả sản phẩm')
            }}
          >
            <span className="font-semibold">Tất cả sản phẩm</span>
            <span>{`(${products.length})`}</span>
          </h3>
          {categories.map((cat, i) => (
            <p
              ref={para}
              className="select-none cursor-pointer capitalize font-semibold"
              key={i}
              onClick={() => {
                const filters = products.filter((product) => product.category === cat)
                setFilterProducts(filters)
                setCatPath(cat)
              }}
            >
              <span>{cat}</span>
            </p>
          ))}
        </div>
        <div>
          <p className="text-gray-500 pb-4">
            {<Link to="/">Trang chủ </Link>}/<span className="text-sky-400 px-1">{catPath}</span>
          </p>
          <div className="grid grid-cols-3 gap-10 ">
            {filterProducts &&
              filterProducts.map((product) => (
                <SingleProduct key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

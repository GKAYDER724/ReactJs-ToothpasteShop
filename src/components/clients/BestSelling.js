import React from 'react'
import Fetchdata from '../clients/Fetchdata'
import SingleProduct from './SingleProduct'

const BestSelling = () => {
  const products = Fetchdata()

  // Sắp xếp sản phẩm theo giá từ thấp đến cao
  const sortedProducts = products.sort((a, b) => a.price - b.price)

  // Lấy 3 sản phẩm rẻ nhất
  const cheapestProducts = sortedProducts.slice(0, 3)

  return (
    <section className="container mx-auto">
      <h2 className="text-4xl py-10 text-center font-medium text-gray-700">Sản phẩm bán chạy</h2>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto pb-20">
        {cheapestProducts &&
          cheapestProducts.map((product) => {
            return <SingleProduct key={product._id} product={product} />
          })}
      </div>
    </section>
  )
}

export default BestSelling

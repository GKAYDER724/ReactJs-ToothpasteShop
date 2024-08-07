import React from 'react'
import Fetchdata from '../clients/Fetchdata'
import SingleProduct from './SingleProduct'

const FeatureProducts = () => {
  const products = Fetchdata()
  const featuredProducts = products.slice(0, 3)

  return (
    <section className="container mx-auto">
      <h2 className="text-4xl py-10 text-center font-medium text-gray-700">Sản phẩm mới</h2>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto pb-20">
        {featuredProducts &&
          featuredProducts.map((product) => {
            return <SingleProduct key={product._id} product={product} />
          })}
      </div>
    </section>
  )
}

export default FeatureProducts

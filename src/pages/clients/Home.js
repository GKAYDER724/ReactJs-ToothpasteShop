import React from 'react'
import BestSelling from '../../components/clients/BestSelling'
import FeatureProducts from '../../components/clients/FeatureProducts'
import Slider from '../../components/clients/Slider'

import Whyme from '../../components/clients/Whyme'

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts />
      <BestSelling />
      <Whyme />
    </div>
  )
}

export default Home

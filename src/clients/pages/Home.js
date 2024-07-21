import BestSelling from "../components/BestSelling";
import FeatureProducts from "../components/FeatureProducts";
import Slider from "../components/Slider";

import Whyme from "../components/Whyme";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts />
      <BestSelling />
      <Whyme />
    </div>
  );
};

export default Home;

import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://duoclieungocchau.vn/wp-content/uploads/2024/04/Banner-1536x540.jpg",
  },
  {
    id: 2,
    src: "https://duoclieungocchau.vn/wp-content/uploads/2022/10/Banner-Web-1-1536x610.png",
  },
  {
    id: 3,
    src: "https://assets.unileversolutions.com/v1/41184777.jpg?im=Resize,width=1200,height=1200",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider relative "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1]  text-gray-50 bottom-[50%] w-screen ">
        <div className="flex  justify-between pr-5 pl-1 gap-10 ">
          <button
            onClick={prevSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-7"
          >
            <span>
              <BsArrowLeft />
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-5"
          >
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductSlider({ productSlider }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {productSlider.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-image-content my-3 w-full mx-auto max-w-screen-md flex justify-between bg-[#14171e] border border-slate-900 rounded-lg h-full py-4 px-0 lg:px-6">
            <div className="text-content max-w-[100%] lg:max-w-[35%] flex flex-col justify-between">
              <div className="text-content-heading">
                <p className="text-tertiary font-inter font-semibold text-xs border-b border-slate-700 py-2 w-40 my-6">
                  {item.title}
                </p>
                <h2 className="text-[1.25rem] lg:text-[1.7rem] lg:leading-9 font-inter text-white font-light pl-0 lg:pl-6">
                  {item.body} <span className="text-tertiary">{item.span}</span>
                </h2>
              </div>
              <div className="image-content block lg:hidden">
                <img src={item.image} alt="" />
              </div>
              <div className="text-content-footer">
                <p className="text-xs font-inter text-tertiary font-normal">
                  {item.foot1}
                </p>
                <p className="text-sm font-inter text-white font-normal">
                  {item.foot2}{" "}
                  <span className="text-tertiary">{item.footSpan}</span>
                </p>
                <button className="bg-gray-800 text-white font-medium  py-2 px-4 mt-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
            <div className="image-content hidden lg:block">
              <img src={item.image} alt="" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductSlider;

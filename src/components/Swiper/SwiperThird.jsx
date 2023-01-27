import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PlatformSlider({ platformSlider }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      breakpoints={{
        50: {
          slidesPerView: 1
        },
        1000: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 5
        }
      }}
      autoplay
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {platformSlider.map((item, index) => (
        <SwiperSlide key={index}>
          <div class="">
            <div className="border-t border-tertiary py-1">
                <p className="text-white text-tertiary text-xs">{item.title}</p>
                <h2 className="text-tertiary font-inter hover:text-white font-normal text-2xl my-2">{item.body}</h2>
            </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PlatformSlider;
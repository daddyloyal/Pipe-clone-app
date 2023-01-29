import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function CaseSlider({ caseStudies }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        50: {
          slidesPerView: 1
        },
        1000: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }}
      loop
      autoplay
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {caseStudies.map((item, index) => (
        <SwiperSlide key={index}>
          <div class="max-w-sm rounded-2xl overflow-hidden group shadow-lg mx-auto my-8 border border-gray-800 bg-secondary hover:bg-card cursor-pointer">
            <div className="relative h-[200px] overflow-y-hidden">
              <img
                class="w-full absolute inset-0"
                src={item.image}
                alt="pave"
              />
              <div className="bg-slate-700 translate-y-0 group-hover:translate-y-[-10rem] duration-700 grid place-items-center bg-opacity-50 transition w-full h-full relative opacity-100 group-hover:opacity-0">
              <img
                src={item.overlay}
                alt={item.title}
              />
              </div>
            </div>
            <div class="px-6 py-4">
              <div class="font-bold font-inter text-md mb-2 text-sm text-white border-b border-slate-700 py-2">
                {item.title}
              </div>
              <p class="text-tertiary hover:text-white font-normal font-inter text-xl my-6">
                {item.body}
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="inline-block text-xs font-inter font-semibold text-tertiary mr-2">
                {item.footer}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CaseSlider;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

// import required modules
import { Pagination, EffectCube, Autoplay } from "swiper/modules";
import "./css/headsection.css";
import HomeSliderOne from "./mincomp/slider/HomeSliderOne";
import HomeSliderTow from "./mincomp/slider/HomeSliderTow";

const Headsection = () => {
  return (
    <section className="headsection">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, EffectCube, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomeSliderOne />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderTow />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Headsection;

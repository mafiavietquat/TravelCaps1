import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";
import "./Banner.scss";

// import required modules
import { Navigation, Autoplay, EffectFade } from "swiper";
//
import { bantayphat, caurong, chualinhung } from "./import";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <div className="banner__container">
            <img alt="" src={caurong} className="banner__img" />
            <div className="banner__content">
              <h4>Come with us</h4>
              <h2>Relax and Enjoy</h2>
              <p>
                Da Nang is known as the most livable city in Vietnam. Come and
                experience the best tourist destinations for you
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__container">
            <img alt="" src={bantayphat} className="banner__img" />
            <div className="banner__content">
              <h4>Come with us</h4>
              <h2>Relax and Enjoy</h2>
              <p>
                Da Nang is known as the most livable city in Vietnam. Come and
                experience the best tourist destinations for you
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__container">
            <img alt="" src={chualinhung} className="banner__img" />
            <div className="banner__content">
              <h4>Come with us</h4>
              <h2>Relax and Enjoy</h2>
              <p>
                Da Nang is known as the most livable city in Vietnam. Come and
                experience the best tourist destinations for you
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;

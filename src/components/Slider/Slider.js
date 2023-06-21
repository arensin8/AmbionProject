import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";
import img1 from "../../assets/Hero.jpg";

// import swipper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        navigation={true}
        pagination={true}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        spaceBetween={40}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide>
          <div className="left-s">
            <div className="name">
              <span>News1</span>
              <span>ywh uwggd ywfdhw augau </span>
            </div>
            {/* <span>{slide.price}</span> */}
          </div>
          <img src={img1} alt="" className="img-p" />
        </SwiperSlide>
        ;
        <SwiperSlide>
          <div className="left-s">
            <div className="name">
              <span>News1</span>
              <span>ywh uwggd ywfdhw augau </span>
            </div>
            {/* <span>{slide.price}</span> */}
          </div>
          <img src={img1} alt="" className="img-p" />
        </SwiperSlide>
        ;
        <SwiperSlide>
          <div className="left-s">
            <div className="name">
              <span>News1</span>
              <span>ywh uwggd ywfdhw augau </span>
            </div>
            {/* <span>{slide.price}</span> */}
          </div>
          <img src={img1} alt="" className="img-p" />
        </SwiperSlide>
        ;
        <SwiperSlide>
          <div className="left-s">
            <div className="name">
              <span>News1</span>
              <span>ywh uwggd ywfdhw augau </span>
            </div>
            {/* <span>{slide.price}</span> */}
          </div>
          <img src={img1} alt="" className="img-p" />
        </SwiperSlide>
        ;
      </Swiper>
    </div>
  );
};

export default Slider;

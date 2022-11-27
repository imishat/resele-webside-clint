import React from 'react';
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="container mb-5">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRyndmlRtGCgq2lnd32z0OgTVIQnmLLsUzw&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.cnbcfm.com/api/v1/image/107118102-1663119439842-IMG_29011.jpg?v=1663183051"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-hero-3up-220308_big.jpg.slideshow-large_2x.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static-01.daraz.com.bd/p/4e65407510ec0c650bc0a723c0a637dc.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a77-en/middlebanner/a77-orange-640x480.jpg.thumb.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.91-img.com/pictures/134124-v5-oppo-k3-mobile-phone-large-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://phoneaqua.com/og/samsung.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/2208/pfs/01-hd02-B4-kv-pc-1440x640.jpg?imwidth=1366"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;
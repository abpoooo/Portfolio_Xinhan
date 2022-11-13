import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import checkout from '../checkout.jpg'
import lulu from '../assets/Lulu.jpg'
import lululemon from '../assets/Lululemon.jpg';
import city from '../assets/city.jpg';
import music from '../assets/Music.jpg'
import './scss/Swiper.scss'
const Swiper1 = () =>{
    SwiperCore.use([EffectCoverflow, Pagination]);
    const img = [city, music, lululemon, lulu, checkout]
    return(
        <div className="main-swiper">
            <Swiper
                effect={"coverflow"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
            >
                {/* using array */}
                {img.map((img, i) => {
                    return (
                        <SwiperSlide key={i}  >
                            <img src={img} alt="" />
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    )
}

export default Swiper1;
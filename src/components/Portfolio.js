import {Header} from "./Header";
import {Footer} from "./Footer";
import lulu from '../assets/Lulu.jpg'
import './scss/Portfolio.scss';
import lululemon from '../assets/Lululemon.jpg';
import city from '../assets/city.jpg';
import music from '../assets/Music.jpg'
import {useNavigate} from "react-router-dom";
import React, {Component, useState} from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import Cloud from "./Cloud";
// import CloudItem from './CloudItem';
// import { Page, Navbar, BlockTitle, Swiper, SwiperSlide, Block } from 'framework7-react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Swiper from './Swiper1'
import "swiper/swiper.min.css";
import checkout from '../checkout.jpg'
import * as url from "url";
import {Link} from "@mui/material";
import Swiper1 from "./Swiper1";
export const Portfolio  = () => {


    // carousel
    const carousel = document.querySelector(".carousel");

    const [btnLeftCarousel, btnRightCarousel] = document.querySelectorAll(
        ".carousel-button"
    );
    let carouselItems = document.querySelectorAll(".carousel__item");
    console.log('carouselItem', carouselItems)
    let carouselCount = carouselItems.length;
    let pos = 0;
    let translateX = 0;
    function slide(options) {
        let carouselItems = document.querySelectorAll(".carousel__item");


        function active(pos) {
            carouselItems[pos].classList.toggle("active");
        }

        function inactive(_pos) {
            carouselItems[_pos].classList.toggle("active");
        }

        inactive(options.disable);
        active(options.show);

        document.querySelectorAll(".carousel__item").forEach((item, index) => {
            if (index === options.show) {
                item.style.transform = `translateX(-${options.translateX}%) scale(1)`;
            } else {
                item.style.transform = `translateX(-${options.translateX}%) scale(0.9)`;
            }
        });

        return options.show;
    }

    // cloud
//  carousel
    const img = [city, music, lululemon, lulu, checkout]


    let [imgIndex,setImgIndex] = useState(0)

    // const cbPrev = function () {
    //     if (images  && imgIndex > 0) {
    //         setImgIndex(state => state - 1)
    //         // console.log('cbPrev index change to', imgIndex)
    //     } else {
    //         setImgIndex(images.length - 1)
    //     }
    // }
    //
    // const cbNext = function () {
    //     if (images && imgIndex < images.length - 1) {
    //         setImgIndex(state => state + 1)
    //         // console.log('cbNext index change to', imgIndex)
    //     } else {
    //         setImgIndex(0)
    //     }
    // }

    ////////////
    const styles = {
        large: {
            fontSize: 60,
            fontWeight: 'bold'
        },
        small: {
            opacity: 0.7,
            fontSize: 16
        }
    };

    const navigate = useNavigate()
    return (
        <div className='Portfolio'>
            <Header/>

            <div className='Cloud'>
                <Cloud/>
            </div>
            <div className='Portfolio_Main'>
                <div className='Portfolio_Main_Top'>
                    <div className='Portfolio_Main_Top_Left'>
                        <h1>
                            Xinhan Yang's Portfolio
                        </h1>
                        <h2>
                            Check out some of my latest project design case studies
                        </h2>
                        {/*<p>*/}
                        {/*    I've worked at Mark2Win IT group and anticipated some of the projects*/}
                        {/*</p>*/}
                    </div>

                    <div className='Portfolio_Main_Top_Right' onClick={() => navigate('/city')}>
                        <img src={city} alt=""/>
                    </div>

                </div>

                <a href="https://github.com/abpoooo?tab=repositories">
                    Here's my recent projects
                </a>


                <div className='Portfolio_Main_Bottom'>

                    <div className='carousel'>

                        {/*<div className="main-swiper">*/}
                        {/*    <Swiper*/}
                        {/*        effect={"coverflow"}*/}
                        {/*        autoplay={{*/}
                        {/*            delay: 2500,*/}
                        {/*            disableOnInteraction: false,*/}
                        {/*        }}*/}
                        {/*        grabCursor={true}*/}
                        {/*        centeredSlides={true}*/}
                        {/*        slidesPerView={"auto"}*/}
                        {/*        coverflowEffect={{*/}
                        {/*            rotate: 50,*/}
                        {/*            stretch: 0,*/}
                        {/*            depth: 100,*/}
                        {/*            modifier: 1,*/}
                        {/*            slideShadows: false,*/}
                        {/*        }}*/}
                        {/*        pagination={true}*/}
                        {/*        className="mySwiper"*/}
                        {/*    >*/}
                        {/*        /!* using array *!/*/}
                        {/*        {img.map((img, i) => {*/}
                        {/*            return (*/}
                        {/*                <SwiperSlide key={i}  >*/}
                        {/*                    <img src={img} alt="" />*/}
                        {/*                </SwiperSlide>*/}
                        {/*            );*/}
                        {/*        })}*/}


                        {/*    </Swiper>*/}
                        {/*</div>*/}
                        <Swiper1/>


                        {/*<Swiper pagination navigation scrollbar>*/}
                        {/*    <SwiperSlide>*/}
                        {/*        <div className='Portfolio_Main_Bottom_City' onClick={() => navigate('/city')}>*/}
                        {/*            <img src={city} alt=""/>*/}
                        {/*            /!*<p>*!/*/}
                        {/*            /!*    CityView Selection with Carousel*!/*/}
                        {/*            /!*</p>*!/*/}

                        {/*        </div>*/}
                        {/*        <div className='Portfolio_Main_Bottom_Music'>*/}
                        {/*            <img src={music} alt=""/>*/}
                        {/*            /!*<p>*!/*/}
                        {/*            /!*    Music Store selection into Fav and Play lists*!/*/}
                        {/*            /!*</p>*!/*/}
                        {/*        </div>*/}
                        {/*        <div className='Portfolio_Main_Bottom_LuLu'>*/}

                        {/*        <img src={lululemon} alt=""/>*/}
                        {/*        /!*<p>*!/*/}
                        {/*        /!*    Lululemon similar E-Commerce website with stripe Checkout*!/*/}
                        {/*        /!*    /!*<br/>*!/*!/*/}
                        {/*        /!*    and Backend Database of Orders and Payments*!/*/}
                        {/*        /!*</p>*!/*/}
                        {/*    </div>*/}
                        {/*    </SwiperSlide>*/}
                        {/*    <SwiperSlide>*/}

                        {/*    </SwiperSlide>*/}
                        {/*    <SwiperSlide>*/}

                        {/*    </SwiperSlide>*/}
                        {/*</Swiper>*/}
                        {/*<Block/>*/}
                    </div>
                    {/*<div className="carousel__buttons">*/}
                    {/*    <button type="button" className="carousel-button" onClick={() =>{*/}
                    {/*        let calculate = pos > 0 ? (pos - 1) % carouselCount : carouselCount;*/}
                    {/*        if (pos > 0) translateX = pos === 1 ? 0 : translateX - 100.5;*/}
                    {/*        else if (pos <= 0) {*/}
                    {/*            translateX = 100.5 * (carouselCount - 1);*/}
                    {/*            calculate = carouselCount - 1;*/}
                    {/*        }*/}

                    {/*        console.log(pos);*/}

                    {/*        pos = slide({*/}
                    {/*            show: calculate,*/}
                    {/*            disable: pos,*/}
                    {/*            translateX: translateX*/}
                    {/*        });*/}
                    {/*    }}>&#10094;</button>*/}
                    {/*    <button type="button" className="carousel-button" onClick={() => {*/}
                    {/*        let calculate = (pos + 1) % carouselCount;*/}
                    {/*        if (pos >= carouselCount - 1) {*/}
                    {/*            calculate = 0;*/}
                    {/*            translateX = 0;*/}
                    {/*        } else {*/}
                    {/*            translateX += 100.5;*/}
                    {/*        }*/}

                    {/*        pos = slide({*/}
                    {/*            show: calculate,*/}
                    {/*            disable: pos,*/}
                    {/*            translateX: translateX*/}
                    {/*        });*/}
                    {/*    }}>&#10095;</button>*/}
                    {/*</div>*/}
                </div>


            </div>

            <Footer/>
        </div>
    )

}

// latest work which is the project
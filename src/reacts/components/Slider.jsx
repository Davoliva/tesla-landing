import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

/* import './styles.css'; */
import "../../Styles/SliderStyles.css"

// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import video
import Video from '../../../public/video-tesla.webm';
import Video2 from '../../../public/video-tesla2.webm';
import Video3 from '../../../public/video-tesla3.webm';
import Video4 from '../../../public/video-tesla4.webm';

export default function MySwiper() {

  const pagination = {
    el: '.my-custom-pagination-div',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' +className + '"></span>';
    },
  };


  return (
    <>
      <Swiper 
        navigation={{
            nextEl: '.next',
        }}
        className="swiper h-screen md:h-screen lg:h-screen"
        centeredSlides={true}
        loop={true}
        slideToClickedSlide={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        slidesPerView={'auto'}
        modules={[Autoplay, Pagination, EffectFade]}> 
          
        
        <div className="my-custom-pagination-div absolute z-10 flex content-cente !w-5 !bottom-auto md:mb-20 ml-10 mb-28"></div>

        <div className="swiper-wrapper relative flex items-center justify-center h-screen overflow-hidden">
        
          <SwiperSlide className="next">
            <header className="text max-w-screen-sm lg:max-w-xl md:max-w-2xl">
              <h1 className="text-3xl font-normal md:text-2xl lg:text-5xl text-white">Model Y Starting at $36,490 After Federal Tax Credit</h1>
              <h2>Eligible buyers qualify for a $7,500 federal tax credit. Applied at time of Model Y delivery. See Details</h2>
              <div className="btns font-semibold w-full text-center content-center [&>a]:mr-7 md:[&>a]:mr-0 [&>a]:py-2 [&>a]:inline-block [&>a]:rounded gap-y-4 grid auto-rows-auto md:grid-auto-columns: minmax(0, 1fr); mt-5 md:mx-0 md:gap-x-4 md:flex">
                <a href="#" className="btn bg-white text-base md:px-10 px-20 hover:bg-stone-800 hover:text-white transition-colors">Shop Available</a>
                <a href="#" className="btn text-white bg-stone-800 px-20 md:px-14 hover:bg-white hover:text-stone-800 transition-colors">Demo Drive</a>
              </div>
            </header>
            <video autoPlay loop muted className="video w-auto min-w-full min-h-full max-w-none justify-center md:max-w-screen lg:max-w-screen"><source src={Video} type="video/mp4" /></video> 
          </SwiperSlide>
          <SwiperSlide className="next">
            <header className="text max-w-screen-sm lg:max-w-xl md:max-w-2xl">
              <h1 className="text-3xl font-normal md:text-2xl lg:text-5xl text-white">Up to 10,000 Free Supercharging Miles</h1>
              <h2>Take delivery of a new Model S, Model X or Model Y by March 31 and receive 5,000 free Supercharging miles for cash or finance purchases. Trade in a vehicle and receive 5,000 miles when you take delivery by March 31. See Terms</h2>
              <div className="btns btns font-semibold w-full text-center content-center [&>a]:mr-7 md:[&>a]:mr-0 [&>a]:py-2 [&>a]:inline-block [&>a]:rounded gap-y-4 grid auto-rows-auto md:grid-auto-columns: minmax(0, 1fr); mt-5 md:mx-0 md:gap-x-4 md:flex">
                <a href="#" className=" bg-white text-base md:px-10 px-20 hover:bg-stone-800 hover:text-white transition-colors">Shop Available</a>
              </div>
            </header>
            <video autoPlay loop muted className="video w-auto min-w-full min-h-full max-w-none justify-center md:max-w-screen lg:max-w-screen"><source src={Video2} type="video/mp4" /></video>
          </SwiperSlide>
          <SwiperSlide className="next">
            <header className="text max-w-screen-sm lg:max-w-xl md:max-w-2xl">
              <h1 className="text-3xl font-normal md:text-2xl lg:text-5xl text-white">New Model 3</h1>
              <h2>Reengineered from the ground up. 
                <br/>
                Be the first to get behind the wheel. Demo drive now.</h2>
              <div className="btns btns font-semibold w-full text-center content-center [&>a]:mr-7 md:[&>a]:mr-0 [&>a]:py-2 [&>a]:inline-block [&>a]:rounded gap-y-4 grid auto-rows-auto md:grid-auto-columns: minmax(0, 1fr); mt-5 md:mx-0 md:gap-x-4 md:flex">
                <a href="#" className="btn bg-white text-base md:px-10 px-20 hover:bg-stone-800 hover:text-white transition-colors">Demo Drive</a>
                <a href="#" className="btn text-white bg-stone-800 px-20 md:px-14 hover:bg-white hover:text-stone-800 transition-colors">Custom Order</a>
              </div>
            </header>
            <video autoPlay loop muted className="video w-auto min-w-full min-h-full max-w-none justify-center md:max-w-screen lg:max-w-screen"><source src={Video3} type="video/mp4" /></video>
          </SwiperSlide>
          <SwiperSlide className="next">
            <header className="text max-w-sm lg:max-w-2xl md:max-w-2xl">
              <h1 className="text-2xl font-normal md:text-2xl lg:text-5xl text-white">Find the Tesla for You</h1>
              <h2>Discover which model is best for you based on your budget, driving habits and lifestyle.</h2>
              <div className="btns btns font-semibold w-full text-center content-center [&>a]:mr-7 md:[&>a]:mr-0 [&>a]:py-2 [&>a]:inline-block [&>a]:rounded gap-y-4 grid auto-rows-auto md:grid-auto-columns: minmax(0, 1fr); mt-5 md:mx-0 md:gap-x-4 md:flex">
                <a href="#" className="btn bg-white text-base md:px-10 px-20 hover:bg-stone-800 hover:text-white transition-colors">Help Me Choose</a>
              </div>
            </header>
            <video autoPlay loop muted className="video w-auto min-w-full min-h-full max-w-none justify-center md:max-w-screen lg:max-w-screen"><source src={Video4} type="video/mp4" /></video>
          </SwiperSlide>
        </div>
        


        


        
      </Swiper>
    </>
  );
}

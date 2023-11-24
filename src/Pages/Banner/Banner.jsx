// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[300px] md:h-[400px] lg:h-[600px]">
                <SwiperSlide><img className='h-[300px] md:h-[400px] lg:h-[600px] w-full' src="https://i.ibb.co/DYTb9w6/banner1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px] md:h-[400px] lg:h-[600px] w-full' src="https://i.ibb.co/X28P7LY/banner6.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px] md:h-[400px] lg:h-[600px] w-full' src="https://i.ibb.co/7YTHyVq/banner5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide> <img className='h-[600px] w-full' src="https://i.ibb.co/wLsMcSY/banner3.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide><img className='h-[300px] md:h-[400px] lg:h-[600px] w-full' src="https://i.ibb.co/z5pMWdP/banner2.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
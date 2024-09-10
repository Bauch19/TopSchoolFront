"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SwiperBanners({ position = 1 }){
  const swiperRef = useRef(null);

  return(
    <>
    <Swiper
      ref={swiperRef}
      key={'swiper-top'}
      direction={'vertical'}
      spaceBetween={0}
      slidesPerView={1}
      loop
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ 
        clickable: true,
        dynamicBullets: true,
      }}
      className='h-[170px] swiperBanner bg-black'
    >
      {position == 1 ? (
      <SwiperSlide key={'banner-1'}>
        <Image 
          src={'/banners/ARBT_035_Banner_web_Top_School_01.gif'}
          alt='banner 1'
          width={2000}
          height={538}
          unoptimized={true}
          priority={true}
          className=" w-full h-[170px] object-cover"
        />
      </SwiperSlide>
      ):(
      <SwiperSlide key={'banner-2'} className='bg-transparent'>
        <Image 
          src={'/banners/ARBT_035_Banner web Top School_01.webp'}
          alt='banner 2'
          width={2000}
          height={538}
          unoptimized={true}
          priority={true}
          className=" w-full h-[170px] object-contain"
        />
      </SwiperSlide>
      )}
      {/* <SwiperSlide key={'banner-3'} className='bg-[#F4D7D3]'>
        <Image 
          src={'/banners/banner-3.jpg'}
          width={2000}
          height={538}
          className=" w-full h-[170px] object-contain"
        />
      </SwiperSlide> */}
    </Swiper>
    </>
  )
}
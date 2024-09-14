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
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function SwiperBanners({ position = 1 }){
  const [swiper, setSwiper] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if(isInView){
      swiper?.autoplay?.start();
      console.log(swiper)
    }
    return () => swiper?.autoplay?.stop();
  },[isInView]);

  return(
    <motion.div ref={ref}>
    <Swiper
      onSwiper={setSwiper}
      key={'swiper-top'}
      direction={'vertical'}
      spaceBetween={0}
      slidesPerView={1}
      loop
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        waitForTransition: false,
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
      <SwiperSlide key={'banner-3'} className='bg-transparent'>
        <Image 
          src={'/banners/A-Banner VP_2.gif'}
          alt='banner 1'
          width={2000}
          height={538}
          unoptimized={true}
          priority={true}
          className=" w-full h-[170px] object-cover"
        />
      </SwiperSlide>
    </Swiper>
    </motion.div>
  )
}
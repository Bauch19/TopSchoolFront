import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SwiperBanners(){
  return(
    <>
    <Swiper
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
      className='h-[170px] swiperBanner'
    >
      <SwiperSlide key={'banner-1'}>
        <Image 
          src={'/banners/banner-1.jpg'}
          width={2000}
          height={538}
          className=" w-full h-[170px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide key={'banner-2'} className='bg-[#B4B7BC]'>
        <Image 
          src={'/banners/banner-2.jpg'}
          width={2000}
          height={538}
          className=" w-full h-[170px] object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={'banner-3'} className='bg-[#F4D7D3]'>
        <Image 
          src={'/banners/banner-3.jpg'}
          width={2000}
          height={538}
          className=" w-full h-[170px] object-contain"
        />
      </SwiperSlide>
    </Swiper>
    </>
  )
}
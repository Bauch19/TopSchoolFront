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

export default function SwiperTop(){
    const arrayAux = [0,1];
    const sliderRef = useRef(null);

    const handlePrev = () => {
        if(sliderRef?.current){
            sliderRef?.current?.swiper?.slidePrev();
        }
    }

    const handleNext = () => {
        if(sliderRef?.current){
            sliderRef?.current?.swiper?.slideNext();
        }
    }

    return(
    <>
    <Control 
        className={'left-0 xl:-left-10'}
        direction='left'
        onClick={() => handlePrev()}
        key={'btn-prev'}
    />
    <Control 
        className={'right-0 xl:-right-10'}
        direction='right'
        onClick={() => handleNext()}
        key={'btn-next'}
    />
    <Swiper
        key={'swiper-top'}
        ref={sliderRef}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        loop
        modules={[Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        breakpoints={{ 
            768: {
                spaceBetween: 50,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 50,
                slidesPerView: 3,
            },
            1280: {
                spaceBetween: 50,
                slidesPerView: 4,
            },
        }}
        className='h-fit swiperTop'
    >
        {arrayAux?.map((item, index) => (
            <>
            <SwiperSlide key={'item-top-1'+index} className='text-blue-200 h-fit w-full'>
                <Items 
                    src={'/articulos/top-1.jpg'}
                    alt='articulo'
                    title={'RAFA MARQUEZ'}
                    description={'EL LEGADO DE UN GRANDE EN MÉXICO'}
                    key={'item-top-1'+index}
                />
            </SwiperSlide>
            <SwiperSlide key={'item-top-2'+index} className='text-blue-200 h-fit w-full'>
                <Items 
                    src={'/articulos/top-2.jpg'}
                    alt='articulo'
                    title={'PALACIO DE HIERRO'}
                    description={'LOS MEJORES RECUERDOS SON LAS AVENTURAS'}
                    key={'item-top-2'+index}
                />
            </SwiperSlide>
            <SwiperSlide key={'item-top-3'+index} className='text-blue-200 h-fit w-full'>
                <Items 
                    src={'/articulos/top-3.jpg'}
                    alt='articulo'
                    title={'ROGER FEDERER'}
                    description={'EN EL OCTAVO DÍA, DIOS CREO A ROGER FEDERER'}
                    key={'item-top-3'+index}
                />
            </SwiperSlide>
            <SwiperSlide key={'item-top-4'+index} className='text-blue-200 h-fit w-full'>
                <Items 
                    src={'/articulos/top-4.jpg'}
                    alt='articulo'
                    title={'ZAPATERIAS PAKAR'}
                    description={'COMO ESTRENAR EN ESTE REGRESO A CLASES'}
                    key={'item-top-4'+index}
                />
            </SwiperSlide>
            </>
        ))}
    </Swiper>
    </>
    )
};

function Items({ src, alt, title, description, ...res }){
    return(
    <div {...res}>
    <div className='containerTop overflow-hidden'>
        <Image 
            src={src}
            alt={alt}
            width={960}
            height={540}
            className='object-cover w-full h-full'
        />
    </div>
    <div className='h-5'></div>
    <span className='text-gray-200 uppercase font-bold py-3'>{title}</span>
    <p className='uppercase text-xs'>{description}</p>
    </div>
    )
}

function Control({ direction = 'left', className, ...res }){
    return(
        <AnimatePresence>
            <motion.button 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                className={`absolute w-10 h-10 top-[40%] rounded-full flex justify-center items-center text-gray-200 z-10 border border-gray-200 ${className}`} {...res}
            >
                {direction == 'left' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-[2px]' viewBox="0 0 24 24" width={24} height={24} color={"#FAFAFA"} fill={"none"}>
                        <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className='ml-[2px]' viewBox="0 0 24 24" width={24} height={24} color={"#FAFAFA"} fill={"none"}>
                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </motion.button>
        </AnimatePresence>
    )
}
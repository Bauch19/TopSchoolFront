import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SwiperArticles(){
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
        arialLabel={'anterior'}
        onClick={() => handlePrev()}
    />
    <Control 
        className={'right-0 xl:-right-10'}
        direction='right'
        arialLabel={'siguiente'}
        onClick={() => handleNext()}
    />
    <Swiper
        key={'swiper-articles'}
        ref={sliderRef}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        loop
        breakpoints={{ 
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1280: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
        }}
        className='h-fit my-5 !z-[3]'
    >
        {arrayAux?.map((item, index) => (
            <>
            <SwiperSlide key={'item-1'+index} className='text-white h-fit w-full !z-[3]'>
                <Items 
                    href={'https://online.fliphtml5.com/fdeoj/wmrr/#p=15'}
                    src={'/articulos/Bienestar.jpg'}
                    alt={'articulo'}
                    title={'Bienestar'}
                    description={'Educar en y desde la coherencia'}
                />
            </SwiperSlide>
            <SwiperSlide key={'item-2'+index} className='text-white h-fit w-full !z-[3]'>
                <Items 
                    href={'https://online.fliphtml5.com/fdeoj/wmrr/#p=17'}
                    src={'/articulos/Valores.jpg'}
                    alt={'articulo'}
                    title={'Hablemos de...'}
                    description={'Con valores se vive mejor en familia'}
                />
            </SwiperSlide>
            <SwiperSlide key={'item-3'+index} className='text-white h-fit w-full !z-[3]'>
                <Items 
                    href={'https://online.fliphtml5.com/fdeoj/wmrr/#p=46'}
                    src={'/articulos/Entrevista.jpeg'}
                    alt={'articulo'}
                    title={'Entrevista con ...'}
                    description={'Cristian Carabias libre como el viento'}
                />
            </SwiperSlide>
            <SwiperSlide key={'item-4'+index} className='text-white h-fit w-full !z-[3]'>
                <Items 
                    href={'https://online.fliphtml5.com/fdeoj/wmrr/#p=10'}
                    src={'/articulos/Para-disfrutar.jpg'}
                    alt={'articulo'}
                    title={'Para disfrutar'}
                    description={'Joaquin Phoenix y Lady Gaga en Joker: Folie à deux'}
                />
            </SwiperSlide>
            </>
        ))}
    </Swiper>
    </>
    )
};

function Items({ src, alt, title, description, href, ...res }){
    return(
    <a href={href} target='_blank' {...res}>
        <div className='containerTop overflow-hidden'>
            <Image 
                src={src}
                alt={alt}
                width={960}
                height={540}
                unoptimized
                priority
                className='object-cover w-full h-full'
            />
        </div>
        <div className='h-10'></div>
        <span className='text-gray-200 uppercase font-bold py-3'>{title}</span>
        <p className='uppercase text-xs'>{description}</p>
    </a>
    )
}

function Control({ direction = 'left', className, arialLabel, ...res }){
    return(
        <AnimatePresence>
            <motion.button 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                aria-label={arialLabel}
                aria-labelledby={arialLabel}
                className={`absolute w-10 h-10 top-[40%] rounded-full flex justify-center items-center z-10 bg-gray-500 bg-opacity-50 backdrop-blur-lg ${className}`} {...res}
            >
                {direction == 'left' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-[2px]' viewBox="0 0 24 24" width={24} height={24} color={"#FFF"} fill={"none"}>
                        <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className='ml-[2px]' viewBox="0 0 24 24" width={24} height={24} color={"#FFF"} fill={"none"}>
                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </motion.button>
        </AnimatePresence>
    )
}
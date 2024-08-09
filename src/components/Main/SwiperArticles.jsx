import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

export default function SwiperArticles(){
    const arrayAux = [0,1];
    return(
    <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation={true} 
        modules={[Navigation,Pagination]} 
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        loop
        className='h-fit'
    >
        {arrayAux?.map((item, index) => (
            <>
            <SwiperSlide key={'item-1'+index} className='text-white h-fit w-full'>
                <div className='containerTop overflow-hidden'>
                    <Image 
                        src={'/articulos/ARTI-02.png'}
                        alt='articulo'
                        width={960}
                        height={540}
                        className='object-cover w-full h-full'
                    />
                </div>
                <span className='text-white uppercase font-bold mb-2'>Rinocerontes</span>
                <p className='uppercase'>Vive la verdadera experiencia en africam safari</p>
            </SwiperSlide>
            <SwiperSlide key={'item-2'+index} className='text-white h-fit w-full'>
                <div className='containerTop overflow-hidden'>
                    <Image 
                        src={'/articulos/ARTI-03.png'}
                        alt='articulo'
                        width={960}
                        height={540}
                        className='object-cover w-full h-full'
                    />
                </div>
                <span className='text-white uppercase font-bold mb-2'>Back to School</span>
                <p className='uppercase'>Office Depot los mejores descuentos</p>
            </SwiperSlide>
            <SwiperSlide key={'item-3'+index} className='text-white h-fit w-full'>
                <div className='containerTop overflow-hidden'>
                    <Image 
                        src={'/articulos/ARTI-04.png'}
                        alt='articulo'
                        width={960}
                        height={540}
                        className='object-cover w-full h-full'
                    />
                </div>
                <span className='text-white uppercase font-bold mb-2'>Entrevista con ...</span>
                <p className='uppercase'>Cristian Carabias libre como el viento</p>
            </SwiperSlide>
            <SwiperSlide key={'item-4'+index} className='text-white h-fit w-full'>
                <div className='containerTop overflow-hidden'>
                    <Image 
                        src={'/articulos/ARTI-05.png'}
                        alt='articulo'
                        width={960}
                        height={540}
                        className='object-cover w-full h-full'
                    />
                </div>
                <span className='text-white uppercase font-bold mb-2'>Tecnología</span>
                <p className='uppercase'>De lo analogo a lo digital, la singularidad</p>
            </SwiperSlide>
            </>
        ))}
    </Swiper>
    )
}
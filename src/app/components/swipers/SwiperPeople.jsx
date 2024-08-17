import People from "@/app/components/presentation/People";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SwiperPeople(){
  const sliderRef = useRef(null);

  const handleNext = () => {
    if(sliderRef?.current){
      sliderRef?.current?.swiper?.slideNext();
    }
  }

  return(<>
  <div className="w-full max-w-[1000px] hidden md:flex justify-between items-center px-5 absolute bottom-0">
    <People 
      src={'/people/persona-1.png'}
      name={'Dana'}
      lastName={'Stevens'}
    />
    <People 
      src={'/people/persona-2.png'}
      name={'Rebeca'}
      lastName={'Hadid'}
    />
    <People 
      src={'/people/persona-3.png'}
      name={'Jordi'}
      lastName={'Soler'}
    />
  </div>
  <div className="w-full max-w-[1000px] px-5 absolute bottom-0 md:hidden">
    <Control 
      className={'right-6'}
      direction='right'
      onClick={() => handleNext()}
      key={'btn-next'}
    />
    <Swiper
      key={'swiper-people'}
      ref={sliderRef}
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
      className='h-fit swiperPeople'
    >
      <SwiperSlide key={'people-1'}>
        <People 
          src={'/people/persona-1.png'}
          name={'Dana'}
          lastName={'Stevens'}
        />
      </SwiperSlide>
      <SwiperSlide key={'people-2'}>
        <People 
          src={'/people/persona-2.png'}
          name={'Rebeca'}
          lastName={'Hadid'}
        />
      </SwiperSlide>
      <SwiperSlide key={'people-3'}>
        <People 
          src={'/people/persona-3.png'}
          name={'Jordi'}
          lastName={'Soler'}
        />
      </SwiperSlide>
    </Swiper>
  </div>
  </>);
}

function Control({ direction = 'left', className, ...res }){
  return(
      <AnimatePresence>
          <motion.button 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              className={`absolute w-10 h-10 top-[40%] rounded-full bg-gray-900 bg-opacity-[0.2] backdrop-blur-sm flex justify-center items-center text-gray-200 z-10 border border-gray-200 ${className}`} {...res}
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
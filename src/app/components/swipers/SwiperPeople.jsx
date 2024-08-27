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
  <div className="w-full h-fit max-w-[1000px] flex flex-col lg:flex-row gap-2 justify-between items-center lg:items-start px-5 xl:pt-28 xl:absolute -bottom-4">
    <People 
      src={'/people/persona-1.png'}
      name={'Dr. Samuel Rangel Rodríguez'}
      lastName={'Mitos sobre la protección de datos.'}
    />
    <People 
      src={'/people/persona-2.png'}
      name={'Ing. Israel Sánchez Martínez'}
      lastName={'La importancia de participar e incidir en la educación de nuestros hijos'}
    />
    <People 
      src={'/people/persona-3.png'}
      name={'Ángel Leyva'}
      lastName={'Las expectativas y retos de Mario Delgado frente a la SEP.'}
    />
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
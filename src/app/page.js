/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { motion, AnimatePresence, useTransform, useScroll, useSpring, MotionValue } from "framer-motion";
import { Icons } from "@/components/Icons";
import { useState, useRef } from "react";
const BackGalaxy = dynamic(() => import('@/components/Main/BackGalaxy'));
const Button = dynamic(() => import('@/app/components/buttons/Button'));
const SwiperTop = dynamic(() => import('@/app/components/swipers/SwiperTop'));
const SwiperBanners = dynamic(() => import('@/app/components/swipers/SwiperBanners'));
const SwiperPeople = dynamic(() => import('@/app/components/swipers/SwiperPeople'));
const Modal = dynamic(() => import('@/app/components/modals/Modal'));
const ModalContact = dynamic(() => import('@/app/components/modals/ModalContact'));
const ParalaxHome = dynamic(() => import('@/app/components/paralax/ParalaxHome'));
const ParallaxText = dynamic(() => import('@/app/components/paralax/ParallaxText'));
const TextAnimation = dynamic(() => import('@/app/components/texts/TextAnimation'));
const TextAnimation3 = dynamic(() => import('@/app/components/texts/TextAnimation3'));
const TextAnimation4 = dynamic(() => import('@/app/components/texts/TextAnimation4'));
const MarqueeAnimation = dynamic(() => import('@/app/components/marquee/MarqueeAnimation'));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const newSection = useRef(null);
  const { scrollYProgress } = useScroll({ target: newSection });
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <>
    <div className="w-fit h-fit z-50 fixed right-4 bottom-4 flex flex-col gap-5">
    <HtmlTooltip arrow placement="top-start" title={<div className="text-xl">Suscribete</div>}>
      <motion.button onClick={() => setOpenContact(true)} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }} aria-label="Suscribete" aria-labelledby="Suscribete" className={'p-2 md:p-5 text-white rounded-full bg-black bg-opacity-25 backdrop-blur-sm border '}>
        <Icons.Notification className={'size-7 md:size-10 text-white'} />
      </motion.button>
    </HtmlTooltip>
    <HtmlTooltip arrow placement="top-start" title={<div className="text-xl">Leer revista</div>}>
      <motion.a href="https://online.fliphtml5.com/fdeoj/wmrr/#p=1" target="_blank" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }} aria-label="revista" aria-labelledby="revista" className={'p-2 md:p-5 text-white rounded-full bg-black bg-opacity-25 backdrop-blur-sm border '}>
        <Icons.Notebook className={'size-7 md:size-10 text-white'} />
      </motion.a>
    </HtmlTooltip>
    </div>
    <main className="relative z-[1] w-[100vw] overflow-x-hidden bg-transparent">
      <BackGalaxy />
      <div className="absolute top-0 !z-[3] bg-transparent w-full h-screen">
        <div className="w-full h-full flex flex-col justify-between relative items-center py-5 bg-transparent">
          <Image 
            src={'/titulo-full.png'}
            alt="titulo"
            width={960}
            height={540}
            priority
            unoptimized
            quality={100}
            fetchPriority="high"
            className="w-full max-w-[300px] h-auto !z-[3]"
          />
          <ParallaxText />
          <Image 
            src={'/boys.png'}
            alt="principal"
            width={960}
            height={540}
            priority
            unoptimized
            quality={100}
            fetchPriority="high"
            className="w-full md:w-3/4 lg:w-[29%] h-auto z-0 lg:-mt-10 mask-img-gradient-min brightness-[0.85] px-5"
          />
          <Button className={'z-[1] absolute bottom-5'} onClick={() => setOpen(true)}>
            Saber más
          </Button>
        </div>
      </div>
      <div className="w-full h-fit bg-black py-[120px]">
        <div className="w-full max-w-[1000px] mx-auto h-fit px-5 z-[3] bg-black">
          <SwiperBanners />
        </div>
      </div>
      <section ref={newSection} className="bg-transparent bg-center bg-cover bg-no-repeat relative flex flex-col gap-20 justify-start items-center py-20 md:py-10 xl:py-20">
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            translateY: "-50%",
            y,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/videos/planet.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        {/* <video  autoPlay loop muted playsInline className="w-screen h-screen object-cover object-center -z-[3] brightness-75 absolute top-0" /> */}
        <Image 
          src={'/logo-news.png'}
          alt="titulo"
          width={960}
          height={540}
          priority
          unoptimized
          quality={100}
          className="w-full max-w-[300px] md:max-w-[600px] lg:max-w-[700px] h-auto z-[1]"
        />
        <div >
          
        </div>
        <div className='flex flex-col gap-1 justify-center items-center text-white uppercase text-[16px] lg:text-[30px] transition text-center font-bold'>
          <p>Las Mejores opiniones</p>
          <p>Educativas del país</p>
        </div>
        <SwiperPeople />
        <div className="w-full max-w-[1000px] h-auto px-12 xl:px-10 mx-auto relative">
          <SwiperTop />
        </div>
        <div className="w-full max-w-[1000px] mx-auto h-fit mt-20 -mb-5 px-5 bg-transparent">
          <SwiperBanners />
        </div>
      </section>
      <ParalaxHome open={openContact} setOpen={setOpenContact} />
      <div className="w-full h-fit py-4 lg:py-5 overflow-hidden relative bg-gold bg-cover bg-center bg-no-repeat">
        <MarqueeAnimation>
          Directorio de Colegios Puebla y Tlaxcala <Icons.StartFill className={'size-4 lg:size-7'} />
          Directorio médico <Icons.StartFill className={'size-4 lg:size-7'} />
          Directorio de Servicios <Icons.StartFill className={'size-4 lg:size-7'} />
        </MarqueeAnimation>
      </div>
    </main>
    <Modal open={open} setOpen={setOpen} />
    <ModalContact open={openContact} setOpen={setOpenContact} /> 
    </>
  );
}
/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <>
    <div className="w-fit h-fit z-50 fixed right-4 bottom-4 flex flex-col gap-5">
    <HtmlTooltip arrow placement="top-start" title={<div className="text-xl">Suscribete</div>}>
      <motion.button onClick={() => setOpenContact(true)} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }} className={'p-2 md:p-5 text-white rounded-full bg-black bg-opacity-25 backdrop-blur-sm border '}>
        <Icons.Notification className={'size-7 md:size-10 text-white'} />
      </motion.button>
    </HtmlTooltip>
    <HtmlTooltip arrow placement="top-start" title={<div className="text-xl">Leer revista</div>}>
      <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }} className={'p-2 md:p-5 text-white rounded-full bg-black bg-opacity-25 backdrop-blur-sm border '}>
        <Icons.Notebook className={'size-7 md:size-10 text-white'} />
      </motion.button>
    </HtmlTooltip>
    </div>
    <video src="/videos/vecteezy_world-map-and-globe_46294190.mov" autoPlay loop muted playsInline className="w-screen h-screen object-cover object-center -z-[3] scale-x-[-1] brightness-75 fixed" />
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
      <section className="bg-transparent !z-[5] bg-center bg-cover bg-no-repeat relative flex flex-col justify-start items-center py-20 md:py-10 xl:py-20">
        <Image 
          src={'/logo-news.png'}
          alt="titulo"
          width={960}
          height={540}
          priority
          quality={100}
          className="w-full max-w-[300px] md:max-w-[600px] lg:max-w-[700px] h-auto z-[1]"
        />
        <div className="w-fit h-fit mt-[120px] lg:mt-0 xl:-mt-14 lg:absolute top-1/2 -translate-y-1/2 flex flex-col gap-1">
          <TextAnimation3 className="text-white uppercase text-xl font-semibold tracking-[5px] text-[30px] z-[6] text-center w-full h-auto flex justify-center items-center"/>
          <TextAnimation4 className="text-white uppercase text-xl font-semibold tracking-[5px] text-[30px] z-[6] text-center w-full h-auto flex justify-center items-center"/>
        </div>
        <SwiperPeople />
      </section>
      <section className="bg-transparent flex flex-col justify-center gap-10 py-20 items-center">
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
          Directorio México <Icons.StartFill className={'size-4 lg:size-7'} />
          Directorio de Servicios <Icons.StartFill className={'size-4 lg:size-7'} />
        </MarqueeAnimation>
      </div>
    </main>
    <Modal open={open} setOpen={setOpen} />
    <ModalContact open={openContact} setOpen={setOpenContact} /> 
    </>
  );
}
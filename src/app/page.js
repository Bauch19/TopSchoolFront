/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
const BackGalaxy = dynamic(() => import('@/components/Main/BackGalaxy'));
const Button = dynamic(() => import('@/app/components/buttons/Button'));
const SwiperTop = dynamic(() => import('@/app/components/swipers/SwiperTop'));
const SwiperBanners = dynamic(() => import('@/app/components/swipers/SwiperBanners'));
const SwiperPeople = dynamic(() => import('@/app/components/swipers/SwiperPeople'));
const Modal = dynamic(() => import('@/app/components/modals/Modal'));
const ModalContact = dynamic(() => import('@/app/components/modals/ModalContact'));
const ParalaxHome = dynamic(() => import('@/app/components/paralax/ParalaxHome'));
import ParticleCanvas from "./components/particles/ParticleCanvas";
import ParticlesJs from "./components/particles/ParticlesJs";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
    <video src="/videos/vecteezy_world-map-and-globe_46294190.mov" autoPlay loop muted className="w-full h-screen object-cover object-center -z-[3] brightness-75 fixed" />
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
          <div className="w-full max-w-fit mx-auto h-fit flex flex-col justify-center items-center !z-10 gap-0 mt-4">
            <p className="uppercase text-white text-[25px] md:text-[40px] font-[200] w-full text-left">
              El poder del
            </p>
            <span className="text-white uppercase text-[45px] md:text-[80px] -mt-4 md:-mt-8 text-center font-bold">
              Mindfulness
            </span>
            <p className="uppercase text-white text-[25px] md:text-[40px] font-[200] -mt-4 md:-mt-8 w-full text-right">
              en la infancia
            </p>
          </div>
          <Image 
            src={'/boys.png'}
            alt="principal"
            width={960}
            height={540}
            priority
            quality={100}
            fetchPriority="high"
            className="w-full md:w-3/4 lg:w-1/3 h-auto z-0 mask-img-gradient-min brightness-[0.85] px-5"
          />
          <Button className={'z-[1] absolute bottom-5'} onClick={() => setOpen(true)}>
            Saber más
          </Button>
        </div>
      </div>
      <div className="w-full h-fit bg-black pb-[120px]">
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
          className="w-full max-w-[300px] md:max-w-[600px] lg:max-w-[700px] py-20 md:py-0 xl:py-20 h-auto z-[1]"
        />
        <div className="text-white uppercase text-xl font-semibold tracking-[5px] z-[6] text-center w-full h-auto absolute top-1/2 -translate-y-1/2">
          Las mejores opiniones<br /> educativas del país
        </div>
        <SwiperPeople />
        <div className="w-full max-w-[1000px] mx-auto h-fit py-10 px-5 bg-transparent absolute -bottom-[170px]">
          <SwiperBanners />
        </div>
      </section>
      <section className="bg-transparent flex flex-col justify-center gap-10 lg:gap-20 py-20 items-center">
        <h3 className="uppercase text-gray-100 font-semibold text-[30px] tracking-[3px] mt-[140px] z-10">Lo más top</h3>
        <div className="w-full max-w-[1000px] h-auto px-12 xl:px-10 mx-auto relative mb-10">
          <SwiperTop />
        </div>
      </section>
      <ParalaxHome open={openContact} setOpen={setOpenContact} />
      <div className="w-full h-[60px] bg-[url(/bg-gold.jpg)] bg-cover bg-center bg-no-repeat" />
      <section className="bg-gradient-to-bl !min-h-fit from-[#002349] to-[#00a9e9] relative flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <Image 
            src={'/logo-white.png'}
            width={500}
            height={100}
            priority quality={75}
            className="w-full max-w-[150px] my-10 h-auto"
          />
        </div>
        <hr className="w-full h-[1px] bg-white"/>
      </section>
    </main>
    <Modal open={open} setOpen={setOpen} />
    <ModalContact open={openContact} setOpen={setOpenContact} /> 
    </>
  );
}
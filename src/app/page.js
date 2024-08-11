/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
const BackGalaxy = dynamic(() => import('@/components/Main/BackGalaxy'));
const Button = dynamic(() => import('@/app/components/buttons/Button'));
const People = dynamic(() => import('@/app/components/presentation/People'));
const SwiperTop = dynamic(() => import('@/app/components/swipers/SwiperTop'));

export default function Home() {
  
  return (
    <>
    <main className="relative z-[0] w-[100vw] overflow-x-hidden bg-white">
      <BackGalaxy />
      <section className="absolute top-0 !z-[3] bg-transparent">
        <div className="w-full h-full flex flex-col justify-start items-center py-5 bg-transparent">
          <Image 
            src={'/titulo-full.png'}
            alt="titulo"
            width={960}
            height={540}
            className="w-1/4 h-auto z-[1]"
          />
          <h2 className="uppercase text-white text-[40px] text-center font-[200] w-[330px] leading-[40px] mt-2 z-[1]">
            El poder del <span className="text-white font-bold">Mindfulness</span> en la infancia
          </h2>
          <Image 
            src={'/boys.webp'}
            alt="principal"
            width={960}
            height={540}
            className="w-1/2 h-auto -mt-[15%] z-0 mask-img-gradient"
          />
          <Button className={'mt-[-10%] z-[1]'}>
            Saber más
          </Button>
        </div>
      </section>
      <div className="w-full h-[25vh] bg-black"></div>
      <section className="bg-black !z-[5] bg-[url(/bg-news.jpg)] bg-center bg-cover bg-no-repeat relative flex flex-col justify-start items-center">
        <Image 
          src={'/banners/banner-1.jpg'}
          width={2000}
          height={538}
          className="absolute -top-[75px] w-[1000px] h-[150px] object-cover"
        />
        <Image 
          src={'/titulo-full.png'}
          alt="titulo"
          width={960}
          height={540}
          className="w-1/2 h-auto z-[1] mt-[80px]"
        />
        <p className="text-white uppercase text-xl font-semibold tracking-[5px] text-center">Las mejores opiniones<br /> educativas del país</p>
        <Button className={'mt-7'}>
          Suscribete
        </Button>
        <div className="w-full max-w-[1320px] flex justify-center items-center">
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
        <Image 
          src={'/banners/banner-1.jpg'}
          width={2000}
          height={538}
          className="absolute -bottom-[75px] w-[1000px] h-[150px] object-cover"
        />
      </section>
      <section className="bg-white flex flex-col justify-center items-center">
        <h3 className="uppercase text-blue-500 font-semibold text-[24px] tracking-[5px] mt-10">Lo más top</h3>
        <div className="w-full max-w-[1000px] mx-auto mt-20 relative">
          <SwiperTop />
        </div>
      </section>
      <section className="bg-[url(/bg-home.jpg)] bg-no-repeat bg-center bg-cover relative flex flex-col justify-start items-center">
        <Image 
          src={'/titulo-full.png'}
          alt="titulo"
          width={960}
          height={540}
          className="w-1/3 h-auto z-[1]"
        />
        <p className="text-white uppercase text-xl font-semibold tracking-[5px] text-center">
          DONDE ENCONTRAR LA<br /> MEJOR OFERTA EDUCATIVA
        </p>
        <Button className={'mt-7'}>
          Suscribete
        </Button>
      </section>
    </main>
    </>
  );
}
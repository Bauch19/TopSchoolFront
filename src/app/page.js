/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
const BackGalaxy = dynamic(() => import('@/components/Main/BackGalaxy'));

export default function Home() {
  
  return (
    <>
    <main className="relative z-[0] w-[100vw] overflow-x-hidden">
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
            className="w-1/2 h-auto -mt-[15%] z-0"
          />
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold uppercase tracking-[5px] bg-[#000] bg-opacity-35 px-4 pl-5 py-1 rounded-full border border-white text-xs backdrop-blur-xl text-white mt-[-10%] z-[1]"
          >
            Saber más
          </motion.button>
        </div>
      </section>
      <section className="bg-black !z-[5] bg-[url(/bg-news.jpg)] bg-center bg-cover bg-no-repeat mt-[15%] relative flex flex-col justify-center items-center">
        <Image 
          src={'/banners/banner-1.jpg'}
          width={2000}
          height={538}
          className="absolute -top-[100px] w-[1000px] h-[200px] object-cover"
        />
      </section>
      <section className="bg-white"></section>
    </main>
    </>
  );
}
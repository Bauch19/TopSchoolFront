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
        <div className="w-full h-full flex flex-col justify-start items-center py-10 bg-transparent">
          <Image 
            src={'/titulo-full.png'}
            alt="titulo"
            width={960}
            height={540}
            className="w-1/4 h-auto"
          />
          <h2 className="uppercase text-white text-[40px] text-center font-thin w-[330px] leading-[40px] mt-10">
            El poder del <span className="text-white font-bold">Mindfulness</span> en la infancia
          </h2>
          <Image 
            src={'/boys.png'}
            alt="principal"
            width={960}
            height={540}
            className="w-1/4 h-auto mt-10 z-0 mask-img-gradient"
          />
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold uppercase tracking-[5px] bg-gray-900 bg-opacity-35 px-2 pl-3 py-1 rounded-full border border-white text-sm backdrop-blur-xl text-white mt-[-5%] z-[1]"
          >
            Saber más
          </motion.button>
        </div>
      </section>
      <section className="bg-black !z-[5]">
        
      </section>
    </main>
    </>
  );
}
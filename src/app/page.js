/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const BackGalaxy = dynamic(() => import('@/components/Main/BackGalaxy'));

export default function Home() {
  
  return (
    <>
    <main className="min-h-screen w-full relative">
      <BackGalaxy />
      <section className="absolute top-0 z-[5] bg-transparent">
        <div className="w-full h-full flex flex-col justify-start items-center py-10 bg-transparent">
          <Image 
            src={'/titulo-full.png'}
            width={960}
            height={540}
            className="w-1/4 h-auto"
          />
          <h2 className="uppercase text-white text-[40px] text-center font-thin w-[330px] leading-[40px] mt-10">
            El poder del <span className="text-white font-bold">Mindfulness</span> en la infancia
          </h2>
          <Image 
            src={'/boys.png'}
            width={960}
            height={540}
            className="w-1/4 h-auto mt-10"
          />
        </div>
      </section>
      <section>

      </section>
    </main>
    </>
  );
}
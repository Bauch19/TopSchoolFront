/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const BackGalaxy = dynamic(() => import('@/components/Main/BackGalaxy'));
const Button = dynamic(() => import('@/app/components/buttons/Button'));
const People = dynamic(() => import('@/app/components/presentation/People'));
const SwiperTop = dynamic(() => import('@/app/components/swipers/SwiperTop'));
const Modal = dynamic(() => import('@/app/components/modals/Modal'));

export default function Home() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    email: '',
  });
  
  return (
    <>
    <main className="relative z-0 w-[100vw] overflow-x-hidden bg-black">
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
            className="w-full max-w-[300px] h-auto z-[1]"
          />
          <h2 className="uppercase text-white text-[40px] text-center font-[200] w-[330px] leading-[40px] mt-2 z-[1]">
            El poder del <span className="text-white font-bold">Mindfulness</span> en la infancia
          </h2>
          <Image 
            src={'/boys.png'}
            alt="principal"
            width={960}
            height={540}
            priority
            quality={100}
            fetchPriority="high"
            className="w-full md:w-3/4 lg:w-1/3 h-auto z-0 mask-img-gradient-min px-5"
          />
          <Button className={'z-[1] absolute bottom-5'} onClick={() => setOpen(true)}>
            Saber más
          </Button>
        </div>
      </div>
      <div className="w-full h-fit py-10 px-5 flex justify-center items-center bg-black">
        <Image 
          src={'/banners/banner-1.jpg'}
          width={2000}
          height={538}
          className=" w-[1000px] h-[150px] object-cover"
        />
      </div>
      <section className="bg-black py-10 !z-[5] bg-center bg-cover bg-no-repeat relative flex flex-col justify-start items-center">
        <video src="/videos/vecteezy_world-map-and-globe_46294190.mov" autoPlay loop muted className="absolute w-full h-screen object-cover object-center z-0 brightness-75" />
        <Image 
          src={'/titulo-full.png'}
          alt="titulo"
          width={960}
          height={540}
          className="w-full max-w-[300px] md:max-w-[600px] lg:max-w-[700px] mt-20 min-[1440px]:mt-20 h-auto z-[1]"
        />
        <div className="text-white uppercase text-xl font-semibold tracking-[5px] z-[6] text-center w-full h-auto">
          Las mejores opiniones<br /> educativas del país
        </div>
        <div className="w-full max-w-[1320px] flex justify-center items-center px-5 absolute bottom-0">
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
          className="absolute -bottom-[75px] w-[1000px] h-[150px] object-cover px-5"
        />
      </section>
      <section className="bg-white flex flex-col justify-between gap-10 lg:gap-20 py-10 items-center">
        <h3 className="uppercase text-blue-400 font-semibold text-[24px] tracking-[5px] mt-20">Lo más top</h3>
        <div className="w-full max-w-[1000px] h-auto px-12 xl:px-10 mx-auto relative">
          <SwiperTop />
        </div>
        <div className="w-full h-auto flex flex-col gap-10 lg:gap-20 justify-center items-center px-5">
          <p className="text-gray-600 font-semibold text-[16px] tracking-[5px] uppercase text-center">
            ¿Te gustaría suscribirte a la revista?
          </p>
          <div className="w-full h-[20px] flex justify-center gap-2 items-end">
            <input 
              type="email" 
              id="email"
              name="emal"
              value={form.email} 
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="w-full max-w-[1000px] text-[14px] text-black h-full bg-transparent border-b border-black" 
            />
            <Button className={''}>
              Enviar
            </Button>
          </div>
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
      {/* <section className="flex flex-col justify-start items-center">
        <Image 
          src={'/titulo-full.png'}
          alt="titulo"
          width={960}
          height={540}
          className="w-1/3 h-auto z-[1]"
        />
        <h2 className="uppercase text-blue-400 font-semibold text-[24px] tracking-[5px] my-8">
          Distribución Nacional
        </h2>
        <div className="flex justify-center items-center gap-5 w-fit">
          <Image 
            src={'/portadas/portada.png'}
            alt="portada"
            width={250}
            height={407}
            className="object-cover object-center scale-75 opacity-55 z-0"
          />
          <Image 
            src={'/portadas/portada.png'}
            alt="portada"
            width={250}
            height={407}
            className="object-cover object-center absolute z-[1]"
          />
          <Image 
            src={'/portadas/portada.png'}
            alt="portada"
            width={250}
            height={407}
            className="object-cover object-center scale-75 opacity-55 z-0"
          />
        </div>
        <p className="uppercase text-blue-400 font-bold text-[36px] my-5">
          * 6 Pass a long
        </p>
        <Button className={'!text-blue-400 !border-blue-400 !bg-white z-[2]'}>
          Anunciate
        </Button>
      </section> */}
      <div className="w-full h-[32px] bg-[url(/bg-gold.jpg)] bg-cover bg-center bg-no-repeat" />
      <section className="bg-gradient-to-bl from-[#002349] to-[#00a9e9] relative flex flex-col justify-center items-center">
        <Image 
          src={'/portadas/magazine.png'}
          alt="magazine"
          width={1920}
          height={1080}
          className="w-full max-w-[500px] h-auto"
        />
        <div className="flex justify-center items-center">
          <Image 
            src={'/logo.png'}
            width={500}
            height={100}
            className="w-full max-w-[150px] h-auto"
          />
        </div>
        <hr className="w-full h-[1px] bg-white"/>
      </section>
    </main>
    <Modal open={open} setOpen={setOpen} />
    </>
  );
}
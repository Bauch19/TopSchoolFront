'use client';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SwiperArticles from "./SwiperArticles";
import "./style.css";

export default function BackGalaxy(){
    return(
    <div className="w-full h-full relative flex flex-col justify-center bg-black">
        <motion.div
            inital={{ translateX: '200vw' }}
            animate={{ translateX: '-200vw' }}
            transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
            }}
            className="absolute !z-[1] w-full h-full"
        >
            <div className="flex w-full z-[1]">
                <Image 
                    src={'/galaxy.webp'}
                    alt="galaxia"
                    width={1920}
                    height={1080}
                    priority
                    quality={100}
                    fetchPriority="high"
                    className="opacity-100 z-[1] left-0"
                />
                <Image 
                    src={'/galaxy.webp'}
                    alt="galaxia"
                    width={1920}
                    height={1080}
                    priority
                    quality={100}
                    fetchPriority="high"
                    className="opacity-100 z-[1] right-0 scale-x-[-1]"
                />
                <Image 
                    src={'/galaxy.webp'}
                    alt="galaxia"
                    width={1920}
                    height={1080}
                    priority
                    quality={100}
                    fetchPriority="high"
                    className="opacity-100 z-[1] right-0"
                />
            </div>
        </motion.div>
        <div className="wrappers w-full h-full relative z-[2]">
            {/* <div id="stars"></div>
            <div id="stars2"></div> */}
            <div class="stars"></div>
        </div>
        <div className="bg-black-transparent w-full h-[40vh] overflow-hidden z-[2]">
            <div className="w-full h-full bg-gradient-to-t from-[#000] flex justify-center items-center">
            </div>
        </div>
        <div className="z-[2] w-full max-w-[1000px] mx-auto -mt-[14%] relative flex flex-col justify-center items-center">
            <span className="w-full text-white uppercase font-bold tracking-[5px] text-[24px] text-center">Lo más leído</span>
            <div className="w-full max-w-[1000px] mx-auto mt-20 relative">
                <SwiperArticles />
            </div>
        </div>
    </div>
    )
}
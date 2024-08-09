'use client';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BackGalaxy(){
    return(
    <div className="w-full h-full relative flex flex-col justify-center ">
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
                    src={'/galaxy-3.jpg'}
                    width={1920}
                    height={1080}
                    className="opacity-100 z-[1] left-0"
                />
                <Image 
                    src={'/galaxy-3.jpg'}
                    width={1920}
                    height={1080}
                    className="opacity-100 z-[1] right-0 scale-x-[-1]"
                />
                <Image 
                    src={'/galaxy-3.jpg'}
                    width={1920}
                    height={1080}
                    className="opacity-100 z-[1] right-0"
                />
            </div>
        </motion.div>
        <div className="wrapper w-full h-full relative z-[2]">
            <div id="stars"></div>
            <div id="stars2"></div>
        </div>
        <div className="bg-black-transparent w-full h-[33vh] z-[2]">
            <div className="w-full h-[33vh] bg-gradient-to-t from-[#000]"></div>
        </div>
    </div>
    )
}
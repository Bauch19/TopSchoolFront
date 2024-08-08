'use client';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BackGalaxy(){
    return(
    <section className="w-full h-[100vh] relative flex justify-center">
        <motion.div
            inital={{ translateX: '200vw' }}
            animate={{ translateX: '-200vw' }}
            transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
            }}
            className="absolute z-[1] w-full h-full"
        >
            <div className="flex w-full">
                <Image 
                    src={'/galaxy.jpg'}
                    width={1920}
                    height={1080}
                    className="opacity-100 scale-[1] left-0"
                />
                <Image 
                    src={'/galaxy.jpg'}
                    width={1920}
                    height={1080}
                    className="opacity-100 scale-[1] right-0 scale-x-[-1]"
                />
                <Image 
                    src={'/galaxy.jpg'}
                    width={1920}
                    height={1080}
                    className="opacity-100 scale-[1] right-0"
                />
            </div>
        </motion.div>
        <section className="wrapper bg-opacity-50 relative z-[2]">
            <div id="stars"></div>
            <div id="stars2"></div>
        </section>
    </section>
    )
}
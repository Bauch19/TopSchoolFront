import { motion, AnimatePresence } from "framer-motion";

export default function Button({ className, children, ...res }){
    return(
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`font-bold uppercase tracking-[5px] bg-[#000] bg-opacity-35 px-4 pl-5 py-1 rounded-full border border-white text-sm backdrop-blur-xl text-white ${className ?? ''}`}
            {...res}
        >
            {children}
        </motion.button>
    )
}

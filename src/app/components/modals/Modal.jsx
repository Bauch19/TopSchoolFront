import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/Icons";

export default function Modal({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-white backdrop-blur-lg bg-opacity-5"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                ease: "easeOut",
                duration: 0.15,
              },
            }}
            exit={{
              scale: 0.75,
              opacity: 0,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] h-fit mx-5 rounded-[20px] bg-white relative flex flex-col justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => setOpen(false)} 
              className="w-7 h-7 flex justify-center items-center rounded-full transition bg-gray-300 hover:brightness-95 absolute top-2 right-2"
            >
              <Icons.Close className="size-6 text-black" />
            </motion.button>

            <h3 className="fuppercase py-2 px-10 text-black text-[20px] text-center font-[200]">
              El poder del <span className="text-black font-bold">Mindfulness</span> en la infancia
            </h3>

            <iframe className="h-[315px] w-full rounded-b-[20px]" src="https://www.youtube.com/embed/a_hPelcPRTg?si=Jg6UpGhHq6qWPrpt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

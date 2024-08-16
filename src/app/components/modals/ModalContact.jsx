import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/Icons";
import Button from "../buttons/Button";
import { useState } from "react";

export default function ModalContact({ open, setOpen }) {
  const [form, setForm] = useState({
    email: '',
  });

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
            className="w-full max-w-[800px] h-fit mx-5 p-5 rounded-[20px] bg-white relative flex flex-col gap-10 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => setOpen(false)}
              className="w-7 h-7 flex justify-center items-center rounded-full transition bg-gray-300 hover:brightness-95 absolute top-2 right-2"
            >
              <Icons.Close className="size-6 text-black" />
            </motion.button>

            <h3 className="text-gray-700 font-semibold text-[16px] tracking-[5px] py-2 px-10 uppercase text-center">
              ¿Te gustaría suscribirte a la revista?
            </h3>

            <div className="w-full h-[24px] flex justify-center gap-2 items-center">
              <input 
                type="email" 
                id="email"
                name="emal"
                placeholder="Correo electrónico"
                value={form.email} 
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full max-w-[1000px] placeholder:text-gray-600 text-[14px] text-gray-900 h-full bg-transparent border-b border-gray-500" 
              />
              <Button onClick={() => setForm({ email: '' })} className={'!border-black !bg-transparent !text-black'}>
                Enviar
              </Button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/Icons";
import Button from "../buttons/Button";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function ModalContact({ open, setOpen }) {
  const [state, handleSubmit] = useForm("mnnakvrb");
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [form, setForm] = useState({
    email: '',
  });

  const handleValidation = () => {
    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if(!regex.test(form.email)){
      setMsgError("El correo no tiene el formato correcto");
    }else{
      setMsgError("");
      // handleSubmit();
    }
  }

  useEffect(() => {
    if(state){
      if(state.succeeded){
        setMsgError("");
        setMsgSuccess("El correo se registro exitosamente");
        setLoading(false);
        setTimeout(() => {
          setMsgSuccess("");
          setForm({ email: '' });
          setOpen(false);
        }, [3500]);
        setLoading(false);
      }
    }
  }, [state]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white backdrop-blur-lg bg-opacity-5"
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

            <form onSubmit={handleSubmit} className="w-full h-[24px] flex justify-center gap-2 items-center">
              <input 
                type="email" 
                id="email"
                name="emal"
                placeholder="Correo electrónico"
                value={form.email} 
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full max-w-[1000px] placeholder:text-gray-600 text-[14px] text-gray-900 h-full bg-transparent border-b border-gray-500" 
              />
              <Button
                type="submit"
                onClick={() => handleValidation()}
                className={'!border-black !bg-transparent !text-black'}>
                Enviar
              </Button>
            </form>

            {msgError !== "" && (
              <span className="absolute -bottom-6 text-sm bg-red-500 px-2 py-0.5 rounded-full w-fit">{msgError}</span>
            )}
            {msgSuccess !== "" && (
              <span className="absolute -bottom-6 text-sm bg-green-500 px-2 py-0.5 rounded-full w-fit">{msgSuccess}</span>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

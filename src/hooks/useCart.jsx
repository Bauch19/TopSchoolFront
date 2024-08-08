"use client";
import { useCallback, useEffect, useState } from "react";

export default function UseCart() {
  const [cart, setCart] = useState([]);
  const [state, setstate] = useState({
    loading: false,
    error: false,
    message: "",
  });

  const addCart = useCallback(
    (informacion) => {
      setstate({ loading: true, error: false, message: "" });
      if (typeof window !== 'undefined') {
        window.localStorage.setItem("shopping_cart_pets", JSON.stringify(informacion));
        const cart_ = window.localStorage.getItem("shopping_cart_pets") ? JSON.parse(window.localStorage.getItem("shopping_cart_pets")) : [];
        setCart(cart_);
      }
    },
    []
  );

  //Mandar a llamar removeUser cuando se cierre sesión
  const removeCart = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem("shopping_cart_pets");
      const cart_ = window.localStorage.getItem("shopping_cart_pets") ? JSON.parse(window.localStorage.getItem("shopping_cart_pets")) : [];
      setCart(cart_)
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart_ = window.localStorage.getItem("shopping_cart_pets") ? JSON.parse(window.localStorage.getItem("shopping_cart_pets")) : [];
      setCart(cart_);
    }
  }, []);

  return {
    loading: state.loading,
    error: state.error,
    message: state.message,
    removeCart,
    addCart,
    cart,
  };
}
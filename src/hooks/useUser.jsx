"use client";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Context from "@/context/userContext";

export default function UseUser() {
  const [user, setUser] = useState({});
  const { cookies, setCookie, removeCookie } = useContext(Context);
  const [state, setstate] = useState({
    loading: false,
    error: false,
    message: "",
  });

  const addUser = useCallback(
    (user) => {
      setstate({ loading: true, error: false, message: "" });
      setCookie("pguser_cookie", user ?? {});
      if (typeof window !== 'undefined') {
        window.localStorage.setItem("pguser_cookie", JSON.stringify(user));
      }
    },
    [setCookie]
  );

  //Mandar a llamar removeUser cuando se cierre sesión
  const removeUser = useCallback(() => {
    removeCookie("pguser_cookie");
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem("pguser_cookie");
    }
  }, [removeCookie]);

  const userId = useMemo(() => {
    return cookies.buser_cookie?.user_id ?? "";
  }, [cookies]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = window.localStorage.getItem("pguser_cookie");
      if (user) {
        setUser(JSON.parse(user));
      }
    }
  }, []);

  return {
    user: user,
    isLogged: !user?.user_id,
    loading: state.loading,
    error: state.error,
    message: state.message,
    removeUser,
    addUser,
    userId,
  };
}
/* eslint-disable react/prop-types */
"use client";
import React, { createContext } from "react";
import { useCookies } from "react-cookie";

const Context = createContext({});

export function UserContextProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["pguser_cookie"]);

  return (
    <Context.Provider
      value={{
        cookies,
        setCookie,
        removeCookie,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;

/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
"use client";
import { UserContextProvider } from '@/context/userContext';
import React from 'react'
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { PrimeReactProvider } from 'primereact/api';

export default function NestedLayout({ children }) {
  return (
    <PrimeReactProvider>
      <UserContextProvider >
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </UserContextProvider>
    </PrimeReactProvider>
  )
}

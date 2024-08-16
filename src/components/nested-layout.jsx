/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
"use client";
import { UserContextProvider } from '@/context/userContext';
import React from 'react'
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { PrimeReactProvider } from 'primereact/api';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function NestedLayout({ children }) {
  return (
    <PrimeReactProvider>
      <UserContextProvider >
        <ParallaxProvider>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ParallaxProvider>
      </UserContextProvider>
    </PrimeReactProvider>
  )
}

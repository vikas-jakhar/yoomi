"use client";
import { useEffect } from 'react';
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import News from "@/components/home/News";
import Partners from "@/components/home/Partners";
import Platform from "@/components/home/Platform";
import Report from "@/components/home/Report";
import Sports from "@/components/home/Sports";
import Tracking from "@/components/home/Tracking";
import PreLoader from '@/components/common/PreLoader';
import ScrollToTop from '@/components/common/ScrollToTop';
import MainLayout from '@/components/home/MainLayout';
import Work from '@/components/home/Work';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden relative">
      <MainLayout />
      <Work />
      <Features />
      <Tracking />
      <Report />
      <Platform />
      <Partners />
      <Sports />
      <News />
      <Footer />
      <PreLoader />
      <ScrollToTop />
    </div>
  );
}
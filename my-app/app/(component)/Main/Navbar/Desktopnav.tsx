"use client";

import { navLink } from "@/app/(constants)/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

import Mobilenav from "./Mobilenav";

const Desktopnav = () => {
  const [navbg, setnavbg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setnavbg(true);
      if (window.scrollY < 90) setnavbg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`h-[12vh] transition-all text-white ${navbg ? "bg-[#0f142ed9] shadow-md" : "fixed"} dureation-200 fixed w-full z-50`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <div className="flex items-center space-x-2">
          <div>
            <FaCode className="w-10 h-10 p-1 mr-1 text-black bg-white rounded-3xl" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl font-bold">
            RISHAV ROUSHAN
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {navLink.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-base hover:text-cyan-300 font-medium transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium
                       hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            <BiDownload className="h-5 w-5 text-white" />
            <span>download cv</span>
          </button>
        </div>
        {/* <div>
          <HiBars3BottomRight className="text-white w-8 h-8 cursor-pointer lg:hidden" />
        </div> */}
        <div className="lg:hidden">
          <Mobilenav />
        </div>
      </div>
    </div>
  );
};

export default Desktopnav;

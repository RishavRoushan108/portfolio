"use client";
import { useState } from "react";
import { navLink } from "@/app/(constants)/constant";
import Link from "next/link";

const Mobilenav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed mt-2 top-4 right-4 z-50 text-2xl"
        >
          ☰
        </button>
      )}

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-75 z-50 shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 p-6">
          {navLink.map((item) => (
            <Link
              href={item.url}
              className="text-base hover:text-cyan-300 font-medium transition-all duration-200"
              key={item.id}
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mobilenav;

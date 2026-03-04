"use client";

import * as React from "react";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import profile from "@/public/profile.jpg";
import Image from "next/image";

export default function Navbar() {

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="w-full" id="home">
      <div className={`flex items-center justify-between py-1.5 text-xs lowercase tracking-tighter text-black ${GeistMono.className}`}>
        <div className="hidden sm:block">
          21 &nbsp;&bull;&nbsp; san francisco &nbsp;&bull;&nbsp; arizona state (go devils) &nbsp;&bull;&nbsp; chaitanyalvis@gmail.com
        </div>
        <nav className="flex items-center gap-4">
          <Link href="https://medium.com/@chaitanyalvis" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
            <span className="text-gray-400">[B]</span> blog
          </Link>
          
          <Link href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-gray-500 transition-colors">
            <span className="text-gray-400">[H]</span> home
          </Link>
          <Link href="#work" onClick={(e) => scrollToSection(e, 'work')} className="hover:text-gray-500 transition-colors">
            <span className="text-gray-400">[W]</span> work
          </Link>
          <Link href="#more" onClick={(e) => scrollToSection(e, 'more')} className="hover:text-gray-500 transition-colors">
            <span className="text-gray-400">[M]</span> more
          </Link>
          <Link href="#photos" onClick={(e) => scrollToSection(e, 'photos')} className="hover:text-gray-500 transition-colors">
            <span className="text-gray-400">[S]</span> snaps
          </Link>
          <Link href="mailto:chaitanyalvis@gmail.com" className="hover:text-gray-500 transition-colors">
            <span className="text-gray-400">[S]</span> social
          </Link>
        </nav>
      </div>

      <div className="flex items-center justify-between bg-black">
        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-semibold tracking-[-0.1em] text-white whitespace-nowrap">
          ©2026
        </div>
        <div className="hidden md:flex">
          <Image
            src={profile.src}
            alt="Profile"
            width={180}
            height={180}
            className="h-32 max-w-fit object-cover grayscale"
            priority
          />
        </div>

        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-semibold tracking-[-0.1em] text-white whitespace-nowrap overflow-hidden text-right">
          CHAITANYA
        </div>
      </div>
    </div>
  );
}

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
      <div className="flex items-center justify-between bg-black">
        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-semibold tracking-[-0.1em] text-white whitespace-nowrap">
          ©2025
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

      <div className={`flex md:flex-row flex-col items-center justify-between text-xs sm:text-sm px-4 sm:px-6 py-2 ${GeistMono.className}`}>
        <div className="text-center sm:text-left mb-2 sm:mb-0 text-gray-600 dark:text-gray-400">
          <span className="hidden sm:inline ">21 • san francisco • arizona state • chaitanyalvis@gmail.com</span>
          <span className="sm:hidden">chaitanyalvis@gmail.com</span>
        </div>
        
        <nav className="flex items-center flex-wrap justify-center gap-1 sm:gap-2 md:gap-4">
          <Link
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="px-1 sm:px-2 text-muted-foreground font-medium transition-colors text-xs sm:text-sm"
          >
            Home
          </Link>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <Link
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="px-1 sm:px-2 text-muted-foreground font-medium transition-colors text-xs sm:text-sm"
          >
            Work
          </Link>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <Link
            href="#more"
            onClick={(e) => scrollToSection(e, 'more')}
            className="px-1 sm:px-2 text-muted-foreground font-medium transition-colors text-xs sm:text-sm"
          >
            More
          </Link>
          
          <span className="text-gray-400 hidden sm:inline">|</span>
          <Link
            href="#photos"
            onClick={(e) => scrollToSection(e, 'photos')}
            className="px-1 sm:px-2 text-muted-foreground font-medium transition-colors text-xs sm:text-sm"
          >
            Snaps
          </Link>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <Link
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-1 sm:px-2 text-muted-foreground font-medium transition-colors text-xs sm:text-sm"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

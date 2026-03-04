"use client";

import Image from "next/image";
import stealth from "@/public/stealth.jpg";
import Link from "next/link";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

function WifiWaves() {
  return (
    <span className="inline-flex items-center ml-2 gap-[3px]">
      <style>{`
        @keyframes wave {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }
      `}</style>
      {["·", ")", ")", ")"].map((char, i) => (
        <span
          key={i}
          className="text-black font-semibold"
          style={{
            animation: `wave 2s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {char}
        </span>
      ))}
      <span className="mx-1 opacity-30">~</span>
      {["(", "(", "(", "·"].map((char, i) => (
        <span
          key={i}
          className="text-black font-semibold"
          style={{
            animation: `wave 2s ease-in-out infinite`,
            animationDelay: `${(3 - i) * 0.3}s`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default function Info() {
  return (
    <div className="w-full flex flex-col items-stretch gap-2">
      <div className="w-full flex flex-col items-center justify-center min-h-[500px]">
        <div className="flex-1 flex flex-col items-center justify-center py-8 px-4">
          <div className="text-black text-4xl font-semibold tracking-tighter text-center flex items-center justify-center">
            <WifiWaves />
            <span className="font-medium mx-2">wifi & embedded systems @ </span> amazon
            <WifiWaves />
          </div>
          <div className="text-black text-2xl font-normal tracking-tighter text-center my-2">
            &
          </div>
          <div className="text-black flex items-center justify-center gap-2 text-2xl font-medium tracking-tighter text-center">
            building{" "}
            <span className="pl-1 tracking-tighter bg-black text-white flex items-center justify-center gap-">
              <Link href="https://meridian-in.com" target="_blank">
                Meridian.ai
              </Link>{" "}
              <Image
                src={stealth}
                alt="meridian"
                width={30}
                height={30}
                className="rounded-full"
              />
            </span>
          </div>
          <div className="text-black text-center my-20 border border-dashed border-gray-300 px-4 flex justify-center items-center gap-2">
            <span className="font-medium text-xs flex items-center gap-2"><LinkedInLogoIcon className="w-4 h-4" /> my linkedin post blew up:</span>
            <span className="text-xs font-semibold tracking-tight"><Link href="https://www.linkedin.com/feed/update/urn:li:activity:7415087057733242880/" rel="noopener noreferrer" target="_blank">raw advice i wish i got at 16... (read more)</Link></span>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-10">
      <div className="w-full lg:w-1/2 flex flex-col p-20">
        <div className="flex-1 relative">
          <div className="grid grid-cols-4 grid-rows-4 gap-0 w-full h-full min-h-[300px]">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="border border-dashed border-gray-300 aspect-square"
              />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-black text-5xl font-medium tracking-tighter text-center bg-white/80 px-4 py-2">
              building
            </div>
            <div className="text-black text-5xl font-medium tracking-tighter text-center bg-white/80 px-4 py-2">
              software at scale.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-black text flex flex-col p-20">
        <div className="flex-1 flex flex-col items-end justify-center p-4 leading-2">
          <span className="text-white text-5xl font-semibold tracking-tighter">
            i code
          </span>
          <span className="text-lime-300 text-5xl font-semibold tracking-tighter">
            i blog
          </span>
          <span className="text-rose-400 text-5xl font-semibold tracking-tighter">
            i design
          </span>
          <span className="text-blue-400 text-5xl font-semibold tracking-tighter">
            i photograph
          </span>

          <span className="text-purple-300 text-5xl font-semibold tracking-tighter">
            i play soccer
          </span>
          <span className="text-orange-400 text-5xl font-semibold tracking-tighter">
            i travel
          </span>
          <span className="text-white text-5xl font-semibold tracking-tighter">
            that&apos;s life
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}

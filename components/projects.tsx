"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GeistMono } from "geist/font/mono";
export default function Projects() {
    
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        <div className="w-full lg:w-1/2 bg-black p-6 flex flex-col justify-between">
          <div className="flex flex-col h-full">
            <div className="text-2xl font-medium tracking-tighter text-white mb-10">
              <span className="font-light">building</span>{" "}
              <Link href="https://meridian-in.com" target="_blank" className="underline decoration-blue-500">
                meridian.ai
              </Link>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-white text-7xl font-medium tracking-tighter mb-4">
                  airbnbs, cars, flights, dining, visas-
                  <br />
                  <span className="text-cyan-400">
                    just <span className={`font-medium text-gray-400 ${GeistMono.className}`}>prompt.</span>
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-white text-md font-medium tracking-tighter text-right">
                  building in stealth. launching soon.
                </p>
                <div className="text-white text-md font-medium tracking-tighter text-right">
                  i&apos;m raising. let&apos;s{" "}
                  <Link className="underline decoration-blue-500" href="">
                    talk. <ExternalLink className="inline w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white border border-black border-dashed p-6 flex flex-col">
          <div className="flex flex-col h-full justify-between">
            <h2 className="text-black text-6xl tracking-tighter font-semibold mb-6">
              Quantum Computing is the Future, and the Future is Now! (is it?)
            </h2>
            <div className="w-full flex justify-between text-right px-2 mt-auto">
              <Link
                href="https://medium.com/@chaitanyalvis/quantum-computing-is-the-future-and-the-future-is-now-is-it-1883d644dbc7"
                className="text-black hover:underline text-xs"
                target="_blank"
              >
                read my blog here{" "}
              </Link>
              <Link
                href="https://medium.com/@chaitanyalvis"
                className="text-black hover:underline text-xs"
                target="_blank"
              >
                all my blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

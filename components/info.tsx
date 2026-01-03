import Image from "next/image";
import stealth from "@/public/stealth.jpg";
import Link from "next/link";

export default function Info() {
  return (
    <div className="w-full flex flex-col items-stretch gap-2">
      <div className="w-full flex flex-col items-center justify-center min-h-[500px]">
        <div className="flex-1 flex flex-col items-center justify-center py-8 px-4">
          <div className="text-black text-4xl font-semibold tracking-tighter text-center">
            <span className="font-medium">wifi & embedded systems @ </span> amazon
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
          {/* <span className="font-medium mt-20 text-xs">open to work</span> */}
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

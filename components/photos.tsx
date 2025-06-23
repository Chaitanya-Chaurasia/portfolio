import Image from "next/image";
import pic1 from "@/public/snaps/1.jpeg";
import pic2 from "@/public/snaps/2.jpeg";
import pic3 from "@/public/snaps/3.jpeg";
import { GeistMono } from "geist/font/mono";

export default function Photos() {
  const Photo = ({ src = "", location = "" }) => (
    <div className={`relative w-[350px] md:h-[600px] h-[400px]`}>
      <Image
        src={src}
        alt="San Francisco"
        fill
        className="object-cover grayscale"
        priority
      />
      <span className={`absolute top-0 left-1 text-center text-xs text-white ${GeistMono.className}`}>{location}</span>
      </div>
  );

  return (
    <div className="w-full p-1">
      <div className="flex flex-col md:flex-row items-center w-3/4 justify-center mx-auto gap-1">
        <Photo src={pic1.src} location="05/23, leh, india"/>
        <Photo src={pic2.src} location="05/25, new york"/>
        <Photo src={pic3.src} location="12/23, golden gate"/>
      </div>
    </div>
  );
}

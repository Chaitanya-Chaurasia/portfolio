import * as React from "react";
import Info from "@/components/info";
import Projects from "@/components/projects";
import Exp from "@/components/exp";
import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import Photos from "@/components/photos";
import Hacks from "@/components/hacks";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen p-2 flex flex-col gap-6">
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <div className="w-full" id="home">
        <Info />
      </div>
      <div className="w-full" id="work">
        <Exp />
      </div>
      <div className="w-full mb-10" id="more">
        <Projects />
      </div>
      <div className="w-full my-20" id="hacks">
        <Hacks />
      </div>
      <div className="w-full my-20" id="photos">
        <Photos />
      </div>
      <div className="w-full my-20" id="contact">
        <ContactPage />
      </div>
      <Footer />
      
    </main>
  );
}

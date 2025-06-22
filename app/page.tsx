import * as React from "react";
import Info from "@/components/info";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/projects";
import Exp from "@/components/exp";
import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
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
      <div className="w-full" id="moreT">
        <Projects />
      </div>
      <div className="w-full" id="contact">
        <ContactPage />
      </div>
      <Footer />
      
    </main>
  );
}

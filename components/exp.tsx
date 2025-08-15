"use client";
import { GeistMono } from "geist/font/mono";
import Logos from "./logos";
import { useEffect, useState } from "react";

const TypewriterEffect = () => {
  const phrases = [
    "i've built ETL pipelines for custom ML models.",
    "i've designed websites scaling to 100K monthly users.",
    "i've debugged kernels and migrated legacy codebases.",
    "i've developed internal APIs for wireless.",
    "i've designed CRMs to handle $100M+ of assets and capital data.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150 - Math.random() * 100);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      if (isDeleting) {
        setCurrentPhrase(fullText.substring(0, currentPhrase.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentPhrase(fullText.substring(0, currentPhrase.length + 1));
        setTypingSpeed(150 - Math.random() * 100);
      }

      if (!isDeleting && currentPhrase === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentPhrase === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, loopNum, phrases, currentIndex, typingSpeed]);

  return (
    <span className="text-center">
      {currentPhrase}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Exp() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 mb-20">
      <div className="w-full flex min-h-[400px] justify-center items-center">
        <div
          className={`text-2xl tracking-tighter ${GeistMono.className} text-right`}
        >
          <TypewriterEffect />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Logos />
      </div>

      <div className="w-full flex justify-center mt-8">
        <a
          href="https://drive.google.com/file/d/1BuZl-vBFH1rIif9Rn3R9G3a0itqAubWx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
        >
          my resume
        </a>
      </div>
    </div>
  );
}

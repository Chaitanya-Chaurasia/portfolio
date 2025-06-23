import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CSSProperties } from "react";

const hackathons = [
  {
    name: "legalaid",
    description: "winner at harvard",
    link: "https://github.com/Chaitanya-Chaurasia/LegalAid"
  },
  {
    name: "incognito",
    description: "winner at stanford",
    link: "https://github.com/Tree-Hacks-24"
  },
  {
    name: "docchain",
    description: "winner at princeton",
    link: "https://github.com/Chaitanya-Chaurasia/HackPrinceton"
  }
];

export default function Hacks() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-medium tracking-[-0.08em] md:tracking-[-0.1em] leading-[0.9] mb-6 md:mb-8 text-center w-full relative break-words">
          i love {" "}
          <span 
            className="relative bg-clip-text text-transparent pr-2 inline-block"
            style={{
              backgroundImage: 'url(/clip.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              display: 'inline-block',
              lineHeight: '0.9',
              wordBreak: 'break-word'
            } as CSSProperties}
          >
            hackathons
          </span>
        </h1>
      </div>
      <div className="text-lg font-medium mb-2 text-center w-full">
        what i&apos;ve built
      </div>
      <div className={`w-full ${GeistMono.className}`}>
        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-0">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="border border-gray-300 p-4 group">
              <div className="font-medium">{hackathon.name}</div>
              <div className="text-muted-foreground">
                {hackathon.description}
              </div>
              <Link 
                href={hackathon.link} 
                target="_blank"
                className="inline-flex items-center mt-2 text-sm text-blue-500 hover:underline"
              >
                see here <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

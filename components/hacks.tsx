import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
    <div className="flex flex-col items-center">
      <div className="text-[10rem] font-medium tracking-[-0.1em] mb-8 text-left w-full">
        i love hackathons
      </div>
      <div className="text-lg font-medium mb-8 text-center w-full">
        what i've built
      </div>
      <div className={`w-3/4 ${GeistMono.className}`}>
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
  );
}

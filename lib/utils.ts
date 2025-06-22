import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Playfair_Display } from "next/font/google"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], style: "italic", weight: ["400", "500", "600", "700", "800", "900"], })


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fonts = {
    playfairDisplay: playfairDisplay.className,
}

import type { Metadata } from "next";
  import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: "Chaitanya Chaurasia",
  description: "this is me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden flex flex-col
           bodymain ${GeistSans.className} antialiased`}
      >
          {children}
          <Analytics />
        <Toaster />
      </body>
    </html>
  );
}

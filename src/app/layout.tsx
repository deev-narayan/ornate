import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GrainScroll from "@/components/GrainScroll";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const cinzel = Cinzel({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "The Ornate Lucknow | Luxury Hotel & Banquet",
  description: "Experience Unmatched Royal Luxury. The Ornate is where old Lucknawi nawabi grandeur meets modern celebration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable} antialiased dark`}
    >
      <body>
        <GrainScroll />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "./SessionWrapper";

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Regular.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Light.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-satoshi"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <SessionWrapper>
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </SessionWrapper>
  );
}

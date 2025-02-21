import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "@/components/ToastContainer";

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
    <html lang="en">
      <body
        className={`h-screen flex flex-col`}
      >
        <Navbar />
        <div className="container mx-auto px-4 flex flex-grow">
        {children}
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}

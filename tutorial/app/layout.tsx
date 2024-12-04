import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Project",
  description: "A NextJS Project with typescript and TailwindCSS",
  keywords: "NextJS, Typescript, TailwindCSS",
};

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-3xl py-2">{children}</main>
      </body>
    </html>
  );
}

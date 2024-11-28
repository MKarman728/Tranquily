import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

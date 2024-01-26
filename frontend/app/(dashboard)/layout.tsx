import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen w-full flex-col justify-between bg-gray-100`}
      >
        <Navbar />
        <div className="m-auto flex w-full gap-10 pr-2">
          <Sidebar />
          <main className="mx-auto mt-2 w-full max-w-5xl flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

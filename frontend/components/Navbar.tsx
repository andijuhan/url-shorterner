import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full bg-gray-50 px-3 py-5 shadow-sm">
      <nav className="m-auto flex w-full max-w-5xl items-center justify-between px-2 md:px-0">
        <Link href="/" className="flex items-center gap-1 text-rose-500">
          <Zap size={30} />
          <h1 className="text-2xl font-bold tracking-tighter text-rose-500 md:text-4xl">
            cutly.lol
          </h1>
        </Link>

        <div className="flex gap-4 md:gap-10">
          <Link className="hover:text-indigo-500" href="/create">
            Log in
          </Link>
          <Link className="text-indigo-600" href="/create">
            Sign up Free
          </Link>
        </div>
      </nav>
    </header>
  );
}

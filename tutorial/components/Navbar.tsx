import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex gap-x-4 mx-auto max-w-3xl py-3 border-b-2">
      <Link href="/">Home</Link>
      <Link href="/count">Counter</Link>
      <Link href="/tours">Tours</Link>
      <Link href="/actions">Actions</Link>
    </nav>
  );
}

export default Navbar;

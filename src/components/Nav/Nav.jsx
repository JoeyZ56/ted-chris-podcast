"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between m-2 text-white">
      <h1 className="text-2xl">Ted & Chris Podcast</h1>
      <Link href="/">Home</Link>
      <Link href="/recordings">Recordings</Link>
      <Link href="/about" className="mr-3">
        About
      </Link>
    </div>
  );
};

export default Nav;

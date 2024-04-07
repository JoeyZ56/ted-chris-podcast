"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = (e) => {
    e.preventDefault();

    const scrollY = window.scrollY;
    setScroll(scrollY);
  };

  return (
    <div className="flex justify-around m-2  text-white">
      <h1 className="text-2xl">Ted & Chris Podcast</h1>
      <Link href="/">Home</Link>
      <Link href="/recordings">Recordings</Link>
      <Link href="/about" className="mr-2">
        About
      </Link>
    </div>
  );
};

export default Nav;

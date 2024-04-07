"use client";
import Image from "next/image";
import Link from "next/link";
import { recordingPlaceholder } from "@/assets";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import Nav from "@/components/Nav/Nav";

const Recordings = () => {
  return (
    <>
      <Nav />
      <div className="text-white">
        <h2 className="flex justify-center mt-3 text-2xl">Recordings</h2>
        <p className="">Clickable links for the individual podcast:</p>
        <div className="flex justify-center flex-wrap mt-3 gap-3">
          <Link href="/recording" passHref>
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
          <Link href="/recording" passHref>
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
          <Link href="/recording" passHref>
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
          <Link href="/recording" passHref>
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
          <Link href="/recording" passHref>
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
          <Link href="/recording" passHref>
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
          <Link href="/recording" passHref>
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
          <Link href="/recording">
            <Image
              src={recordingPlaceholder}
              alt="placeholder"
              width={300}
              height={300}
              className="recordings"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Recordings;

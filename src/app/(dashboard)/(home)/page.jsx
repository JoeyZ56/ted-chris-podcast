import Nav from "@/components/Nav/Nav";
import { bgplaceholder, placeholderLogo } from "@/assets";
import Image from "next/image";
import Recordings from "@/components/Recordings/Recordings";
import Footer from "@/components/Footer/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <div>
        <Image
          src={placeholderLogo}
          alt="logo"
          width={200}
          height={200}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />
      </div>
      <div className="felx justify-center items-center">
        <Image
          src={bgplaceholder}
          alt="bgplaceholder"
          width={1500}
          height={800}
          layout="responsive"
        />
        <h2 className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-center">
          Unveiling <br /> <br /> <span>The Hidden Truths</span>
        </h2>
      </div>
      <div>
        <div>
          <Recordings />
        </div>

        <Footer />
      </div>
    </>
  );
}

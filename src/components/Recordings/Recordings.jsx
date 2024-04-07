import Image from "next/image";
import Link from "next/link";
import { recordingPlaceholder } from "@/assets";

const Recordings = () => {
  return (
    <div className="text-white">
      <h2 className="flex justify-center mt-3 text-2xl">Recordings</h2>
      <div className="flex justify-center flex-wrap mt-3 gap-3">
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
        <Image
          src={recordingPlaceholder}
          alt="placeholder"
          width={300}
          height={300}
          className="recordings"
        />
      </div>
    </div>
  );
};

export default Recordings;

import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import { placeholder1, placeholder2 } from "@/assets";

const About = () => {
  return (
    <>
      <Nav />
      <div className="text-white m-2">
        <h1 className="flex justify-center text-2xl mt-2">About</h1>
        <div className="flex justify-center flex-col m-9">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda.
          </p>
        </div>
        <div>
          <Image
            src={placeholder1}
            alt="placeholder"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center flex-col m-9">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda.
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={placeholder2}
            alt="placeholder"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center flex-col m-9">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

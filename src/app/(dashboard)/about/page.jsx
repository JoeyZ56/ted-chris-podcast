import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import { placeholder1, placeholder2 } from "@/assets";

const About = () => {
  return (
    <>
      <Nav />
      <div className="text-1xl">
        <h1 className="flex justify-center text-2xl mt-4">About Us</h1>
        <div className="flex justify-between items-start mx-9">
          <div className="flex-1 mt-[100px] text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              illum dicta sequi amet quae odit, velit impedit omnis. Dolores
              optio deserunt consectetur repellat id amet molestias illo alias
              tempora assumenda. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              illum dicta sequi amet quae odit, velit impedit omnis. Dolores
              optio deserunt consectetur repellat id amet molestias illo alias
              tempora assumenda. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque ad quam accusantium alias consequatur non
              doloribus, repudiandae amet dolorem reprehenderit hic. Voluptatum
              minima mollitia natus a nulla hic vitae architecto.
            </p>
          </div>
          <Image
            src={placeholder1}
            alt="placeholder"
            width={300}
            height={300}
            className="rounded-full ml-6 float-left"
          />
        </div>
        <div className="mx-9 mt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magni sint cupiditate libero explicabo mollitia quas, maiores nemo
            fugiat consectetur porro debitis dignissimos, distinctio aut. Earum
            quia asperiores ipsa nihil deserunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum dicta sequi amet quae odit, velit impedit omnis. Dolores optio
            deserunt consectetur repellat id amet molestias illo alias tempora
            assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi possimus enim in reprehenderit eaque exercitationem aut.
            Obcaecati necessitatibus recusandae vero! Eos, odio accusantium et
            quis recusandae quisquam illo nulla in.
          </p>
        </div>
        <div className="flex justify-between items-start mx-9">
          <Image
            src={placeholder2}
            alt="placeholder"
            width={300}
            height={300}
            className="rounded-full mr-6 mt-2 float-right"
          />
          <div className="flex-1 absolute left-[350px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              illum dicta sequi amet quae odit, velit impedit omnis. Dolores
              optio deserunt consectetur repellat id amet molestias illo alias
              tempora assumenda.
            </p>
            <div className="flex-1 absolute left-[15px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt illum dicta sequi amet quae odit, velit impedit omnis.
                Dolores optio deserunt consectetur repellat id amet molestias
                illo alias tempora assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

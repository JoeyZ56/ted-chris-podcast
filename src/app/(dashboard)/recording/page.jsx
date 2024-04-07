import Image from "next/image";
import { recordingPlaceholder } from "@/assets";
import Nav from "@/components/Nav/Nav";

const Recording = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center">
        {/* <h2>{recording.title}</h2> */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="mb-3 mt-3">Recording Title</h2>
          <Image
            src={recordingPlaceholder}
            alt="Recording Image"
            className="w-[600px] h-50"
          />

          <div className="flex flex-row gap-[300px]">
            <p>Recording Date</p>
            <p>Recording Length</p>
          </div>
          <div className="mt-5 m-[300px]">
            <p className="flex justify-center flex-col items-center m-8">
              <span>Recording Detail</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium repudiandae saepe unde dolorem quasi rem ratione error
              eum? Accusamus error explicabo facilis necessitatibus illum
              quaerat accusantium eum commodi voluptatibus ipsa! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dolorem accusantium
              et delectus ex cupiditate reprehenderit ab. Perferendis ab sit,
              laboriosam praesentium saepe, ut possimus ex dolorem, minus fugiat
              quos maxime. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Unde sequi saepe doloremque eveniet maiores aut blanditiis
              voluptate maxime, reprehenderit placeat voluptatibus nisi nulla
              modi impedit iure nobis molestias.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recording;

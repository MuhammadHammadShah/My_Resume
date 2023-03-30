import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export const Home = () => {
  return (
    <section className=" max-w-4xl mx-auto flex md:flex-row sm:flex-col">
      {/* left corner starts */}
      <div className="p-5 leading-8 ">
        <h1>I am a Full Stack Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          architecto expedita esse dolor tenetur dolorum illum earum porro nisi,
          facere quis voluptatum illo perferendis, consequatur odit velit
          veritatis dolore ea necessitatibus eligendi labore itaque unde aut
          sequi. Eum facilis excepturi beatae molestiae soluta, aperiam, atque
          accusamus sed adipisci sequi quam!
        </p>
        <button className=" group flex justify-center items-center  bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 rounded-lg mt-5">
          Profile
          <MdKeyboardArrowRight
            size={20}
            className="group-hover:rotate-90 duration-500"
          />
        </button>
      </div>
      {/* left corner ends */}
      <div className="p-5">
        <div>
          {/* right corner starts */}
          <img
            src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004__340.jpg"
            alt="just an image"
          />
        </div>
        {/* right corner ends */}
      </div>
    </section>
  );
};

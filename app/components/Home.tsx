import Image from "next/image";
import React from "react";

export const Home = () => {
  return (
    <section>
      {/* left corner starts */}
      <div className="p-5">
        <h1>I am a Full Stack Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          architecto expedita esse dolor tenetur dolorum illum earum porro nisi,
          facere quis voluptatum illo perferendis, consequatur odit velit
          veritatis dolore ea necessitatibus eligendi labore itaque unde aut
          sequi. Eum facilis excepturi beatae molestiae soluta, aperiam, atque
          accusamus sed adipisci sequi quam!
        </p>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 rounded-lg">
          Portfolio
        </button>
      </div>
      {/* left corner ends */}
      <div className="p-5">
        {/* right corner starts */}
        <Image />
        {/* right corner ends */}
      </div>
    </section>
  );
};

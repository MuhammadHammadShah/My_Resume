import React from "react";

export const Portfolio = () => {
  return (
    <div
      className="flex items-center max-w-7xl mx-auto leading-8 mb-10"
      id="Portfolio"
    >
      <div>
        <h1 className="text-center text-4xl text-white mb-10">Portfolio</h1>;
      </div>
      {/* Card_1 starts from here  */}
      <div className=" shadow-md shadow-gray-400  h-60 hover:scale-105 duration-75">
        <div>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt="any_image"
            className=" w-60 h-40 rounded-t-md"
          />
        </div>

        <div className="flex justify-between px-5 text-white">
          <button className=" p-4 hover:scale-105 duration-200">
            <a href="#">Demo</a>
          </button>

          <button className=" p-4 hover:scale-105 duration-200">
            <a href="#">Code</a>
          </button>
        </div>
      </div>
      ;{/* Card_2 ends from here  */}
    </div>
  );
};

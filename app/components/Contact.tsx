import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className=" flex items-center max-x-7xl mx-auto leading-8 mb-10">
        <div className=" text-gray-500 px-10 mt-32 mx-auto">
          <h1 className=" text-center text-4xl text-white">Contact</h1>
          <p className=" text-center text-white my-5">Get in Touch with me </p>
          <form>
            <div>
              <input
                placeholder="Your Name"
                type="text"
                className=" p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <div className=" my-4">
              <input
                placeholder="Your Email"
                type="email"
                className=" p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <div>
              <textarea
                rows={7}
                cols={30}
                placeholder="Your Message"
                className=" p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

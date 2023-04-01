import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className=" flex items-center max-x-7xl mx-auto leading-8 mb-10">
        <div className=" text-gray-500 px-10 mt-32 mx-auto">
          <h1 className=" text-center text-4xl text-white">Contact</h1>
          <p className=" text-center text-white my-5">Get in Touch with me </p>
          <form action="https://formspree.io/f/mgebnlzw" method="POST">
            <div>
              <input
                required
                placeholder="Your Name"
                name="Sender_name"
                type="text"
                className=" p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <div className=" my-4">
              <input
                required
                placeholder="Your Email"
                name="Sender_email"
                type="email"
                className=" p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <div>
              <textarea
                required
                rows={7}
                cols={30}
                name="Sender_message"
                placeholder="Your Message"
                className=" p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <button
              type="submit"
              className=" mx-auto block px-5 rounded-md bg-gradient-to-b from-gray-300 to-gray-600  text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

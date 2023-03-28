import React from "react";

export const Header = () => {
  return (
    <div>
      <section className=" bg-gray-700 text-white">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold font-signature m-7 ">
            Muhammad Hammad Shah
          </h1>
          <ul className="flex m-7">
            <li className="text-2xl mx-5 font-khanBaBa hover:scale-150 duration-200">
              Home
            </li>
            <li className="text-2xl mx-5 font-khanBaBa hover:scale-150 duration-200">
              About
            </li>
            <li className="text-2xl mx-5 font-khanBaBa hover:scale-150 duration-200">
              Skill
            </li>
            <li className="text-2xl mx-5 font-khanBaBa hover:scale-150 duration-200">
              Portfolio
            </li>
            <li className="text-2xl mx-5 font-khanBaBa hover:scale-150 duration-200">
              Contact
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

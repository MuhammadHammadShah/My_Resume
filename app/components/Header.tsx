"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
export const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <section className=" bg-gray-700 text-white">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold font-signature m-7 ">
            Muhammad Hammad Shah
          </h1>
          <ul className="m-7 md:flex hidden ">
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
          <div
            className="pr-5 md:hidden z-10"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
          </div>
        </div>
        {/* overlay stays here  */}
        {!toggle ? (
          <div className="fixed top-0 left-0 bg-slate-600 h-screen text-red-500 w-full flex justify-center items-center  ">
            <ul className="md:flex left-10 text-white m-7 ">
              <a className="cursor-pointer">
                <li className=" mt-10 mx-5 text-8xl font-khanBaBa ">Home</li>
              </a>
              <a href="" className="">
                <li className=" mt-10 mx-5 text-8xl font-khanBaBa  ">About</li>
              </a>
              <a href="" className="">
                <li className=" mt-10 mx-5 text-8xl font-khanBaBa  ">Skill</li>
              </a>
              <a href="" className="">
                <li className=" mt-10 mx-5 text-8xl font-khanBaBa ">
                  Portfolio
                </li>
              </a>
              <a href="" className="">
                <li className=" mt-10 mx-5 text-8xl font-khanBaBa  ">
                  Contact
                </li>
              </a>
            </ul>
          </div>
        ) : null}
        {/* overlay ends here  */}
      </section>
    </div>
  );
};

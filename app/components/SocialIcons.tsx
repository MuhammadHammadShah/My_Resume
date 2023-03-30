import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithubSquare, FaMedium } from "react-icons/fa";
export const SocialIcons = () => {
  return (
    <div>
      <Link
        href="https://www.linkedin.com/in/muhammad-hammad-9a480b270/"
        target="_blank"
      >
        <div className="ml-[-88px] hover:ml-0 duration-200 gap-x-4 flex gap-2  items-center text-lg justify-center fixed text-white bg-gray-600 top-[30vh] w-34 py-2 px-4 rounded-r">
          LinkedIn
          <FaLinkedin size={25} />
        </div>
      </Link>
      <Link href="https://github.com/MuhammadHammadShah" target="_blank">
        <div className="ml-[-85px] hover:ml-0 duration-200 gap-x-6 flex gap-2 items-center text-lg justify-center fixed text-white bg-gray-600 top-[40vh] w-34 py-2 px-4 rounded-r">
          Github
          <FaGithubSquare size={25} />
        </div>
      </Link>
      <Link href="https://medium.com/@hammad4455shah5544" target="_blank">
        <div className="ml-[-88px] hover:ml-0 duration-200 gap-x-4 flex gap-2 items-center text-lg justify-center fixed text-white bg-gray-600 top-[50vh] w-34 py-2 px-4 rounded-r">
          Medium
          <FaMedium size={25} />
        </div>
      </Link>
    </div>
  );
};

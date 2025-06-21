import React from "react";
import { Bs0SquareFill, BsShop } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import DarkMode from "../DarkMode";
import Hero from "../Hero/Hero";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container px-3 sm:px-0 py-1 sm:py-0">
          <div className="flex justify-between items-center">
            <>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src="../logo.jpg" alt="insert img" className="w-10" />
                Foodle
              </a>
            </>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-4c:\Users\Choudhary Rizwan\Music\download.jpeg"></div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex gap-4">
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-green-600 to-blue-950 text-white px-4 py-1 rounded-full hover:scale-105 duration-300 items-center gap-2 flex">
                Order
                <CgShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

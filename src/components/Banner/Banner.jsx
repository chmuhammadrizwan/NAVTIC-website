import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
0;
const Food1 = "../image/biryani2.png";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px]">
        <div>
          <div data-aos-duration="300" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* image section */}
              <div>
                <img
                  src={Food1}
                  alt=""
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgb(0,0,1)] "
                />
              </div>
              {/* text-content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                  Lorem ipsum dolor
                </h1>
                <p className="text-sm text-white-500 tracking-wide text-center sm:text-left loading-5  ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  animi aut ea numquam nostrum iste dicta quasi ipsum nihil
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  animi aut ea numquam nostrum iste dicta quasi ipsum nihil
                  ullam error iure odio ab reprehenderit magni amet saepe,
                  aliquid id?
                </p>
                <div className="flex gap-6 justify-center sm:justify-start">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-400 dark:bg-violet-800 " />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-400 dark:bg-orange-800" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-400 dark:bg-green-800 " />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-green-700 to-blue-950 text-white px-6 py-3 rounded-full hover:scale-105 duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

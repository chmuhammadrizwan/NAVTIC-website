import React from "react";
const bgImg = "../image/bg.png";
const Food1 = "../image/biryani2.png";
const Food2 = "../image/biryani3.png";
const Food3 = "../image/biryani5.png";

const ImageList = [
  {
    id: 1,
    image: Food1,
  },
  {
    id: 2,
    image: Food2,
  },
  {
    id: 3,
    image: Food3,
  },
];
const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(Food1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950
      dart:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-14 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section*/}
            <div
              className="flex flex-col justify-center gap-4 
             pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to the Foodie Zone
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                reiciendis non exercitationem sint velit et iste placeat porro,
                possimus aliquid ipsam quibusdam totam! Quidem error assumenda
                voluptatem ea illum soluta amet sunt! Temporibus blanditiis
                pariatur modi earum ullam architecto repellendus.
              </p>
              <div>
                <button
                  className="bg-gradient-to-r from-green-700 to-blue-950
             text-white px-4 py-2 rounded-full hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image Sector */}
            <div
              className="order-1 sm:order-2 min-h-[450px] 
            sm:min-h-[450px]  flex justify-center items-center relative   "
            >
              {/* main iamge sector */}
              <div
                className=" flex justify-center 
              items-center h-[300px] sm:h-[450px] overflow-hidden mr-24 mt-36"
              >
                <img
                  src={imageId}
                  alt=""
                  className="w-[300px] sm:w-[450px]  spin mb-28 mx-auto"
                />
              </div>
              {/* image list sector */}
              <div
                className="flex lg:flex-col 
              lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center
              gap-4 absolute button-[0px] lg:right-10 bg-whit/30 rounded-full"
              >
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    className="max-w-[130px] h-[90px]
                       object-contain inline-block hover:scale-105 duration-200 px-2 py-2 mt-96 md:mt-12  spin "
                    onClick={() => {
                      setImageId(
                        item.id == 1 ? Food1 : item.id == 2 ? Food2 : Food3
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;

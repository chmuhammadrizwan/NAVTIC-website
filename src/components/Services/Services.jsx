import React from "react";

const ServicesData = [
  {
    id: 1,
    img: "../image/biryani2.png",
    name: "biryani",
    description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quam nihil voluptates, doloremque illum accusantium. Et magni
              adipisci quibusdam nobis?`,
  },
  {
    id: 2,
    img: "../image/biryani3.png",
    name: "Chicken Kari",
    description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quam nihil voluptates, doloremque illum accusantium. Et magni
              adipisci quibusdam nobis?`,
  },
  {
    id: 3,
    img: "../image/biryani5.png",
    name: "Cold Cofee",
    description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quam nihil voluptates, doloremque illum accusantium. Et magni
              adipisci quibusdam nobis?`,
  },
];

const Services = () => {
  return (
    <>
      <div className="py-14">
        <div className="container">
          {/* Header Section    */}

          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-950">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-x5 text-gray-400 cursor-pointer line-clamp-3">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quam nihil voluptates, doloremque illum accusantium. Et magni
              adipisci quibusdam nobis?
            </p>
          </div>
          {/* card Section */}
          <d className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10 md:gap-16 place-items-center ">
            <>
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    key={id}
                    className="max-w-[300px] group  rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl cursor-pointer"
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-500 "
                      />
                    </div>
                    <div className="p-4 text-center cursor-pointer">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          </d>
        </div>
      </div>
    </>
  );
};

export default Services;

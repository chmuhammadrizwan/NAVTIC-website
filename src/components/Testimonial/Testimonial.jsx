import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const testimonialData = [
  {
    id: 1,
    name: "Rizwan",
    text: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quam nihil voluptates, doloremque illum accusantium. Et magni
              adipisci quibusdam nobis?`,
    image: "../image/biryani2.png",
  },
  {
    id: 1,
    name: "John Deo",
    text: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                quam nihil voluptates, doloremque illum accusantium. Et magni
                adipisci quibusdam nobis?`,
    image: "../image/biryani2.png",
  },
  {
    id: 1,
    name: "Smith",
    text: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quam nihil voluptates, doloremque illum accusantium. Et magni
              adipisci quibusdam nobis?`,
    image: "../image/biryani2.png",
  },
];
const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-x5 text-gray-400 ">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quam nihil voluptates, doloremque illum accusantium. Et magni
              adipisci quibusdam nobis?
            </p>
          </div>
          {/* Testimonial Section */}
          <div
            className="
            grid grid-cols-1 max-w-[900px] mx-auto gap-6 place-items:center  "
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, image }) => {
                return (
                  <div key={id} className="my-4">
                    <div className="flex flex-col justify-center items-center gap- text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative ">
                      <img
                        src={image}
                        className="rounded-full block mx-auto "
                      />
                      <p className="text-gray-500 text-sm">{text}</p>
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

function App() {
  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 500,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);
  return (
    <>
      <div className=" bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <AppStore />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;

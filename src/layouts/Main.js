import React from "react";
import Hero from "../pages/home/Hero";
import Specials from "../pages/home/Specials";
import Testimonials from "../pages/home/Testimonials";
import About from "../pages/home/About";

const Main = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;

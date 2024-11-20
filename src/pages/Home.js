import React from "react";
import Hero from "../components/pages-components/home/Hero";
import Specials from "../components/pages-components/home/Specials";
import Testimonials from "../components/pages-components/home/Testimonials";
import About from "../components/pages-components/home/About";

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

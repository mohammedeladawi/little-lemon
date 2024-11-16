import React from "react";
import ImgA from "../../assets/images/Mario and Adrian A.jpg";
import ImgB from "../../assets/images/Mario and Adrian b.jpg";
import Container from "../../components/grid-system/Container";

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <div className="about-info">
          <div className="titles">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p className="details">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="about-imgs">
          <img src={ImgA} alt="Mario and Adrian" />
          <img src={ImgB} alt="Mario and Adrian" />
        </div>
      </Container>
    </section>
  );
};

export default About;

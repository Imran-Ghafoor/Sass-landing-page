import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/reactJs.jpg";
import img3 from "../assets/javascriptJS.jpg";
import img4 from "../assets/Node.png";
import img5 from "../assets/tailwind.png";
import img6 from "../assets/3.webp";
import img7 from "../assets/motion.png";
import img8 from "../assets/mern-stack.png";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={1500}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Web Development</p>
        </div>

        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">React</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Javascript</p>
        </div>
        <div>
          <img src={img4} alt="Item4" />
          <p className="legend">Node.Js</p>
        </div>
        <div>
          <img src={img5} alt="Item5" />
          <p className="legend">Tailwind css</p>
        </div>
        <div>
          <img src={img6} alt="Item6" />
          <p className="legend">Sass</p>
        </div>
        <div>
          <img src={img7} alt="Item7" />
          <p className="legend">Framer Motion</p>
        </div>
        <div>
          <img src={img8} alt="Item8" />
          <p className="legend">MERN</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;

import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Chegg</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the Tec problems you face every
            day. We are leading Tec company whose aim is to problem solving
            ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            A passionate skilled MERNStack, Specialist in Front-end and
            enthusiastic javascript developer with a strong background in
            JAVASCRIPT/ES6, REACT.js, Node.js, Redux Toolkit, Context API, MY
            SQL, HTML/CSS, TAILWIND, Bootstrap, SASS, SCSS, Ant Design, GIT |
            GIT HUB, and code Debugging.
          </p>
        </div>
      </div>

      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

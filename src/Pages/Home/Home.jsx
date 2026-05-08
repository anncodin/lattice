import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero container">
        <div className="hero-text">
          <p>potential of design</p>
          <h1>Designing the Art of living</h1>
          <p id='subtext'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            repudiandae.
          </p>
          <button className="btn hero-btn">
            Take a Book <i class="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useRef } from "react";
import "./Home.css";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import image from "../../assets/naksha-banwao-3ddHcjHmiGw-unsplash.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="hero container">
        <img src={back_icon} alt="" className="back-btn" />
        <img src={next_icon} alt="" className="next-btn" />
        <div className="hero-text">
          <p>potential of design</p>
          <h1>Designing the Art of living</h1>
          <p id="subtext">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            repudiandae.
          </p>
          <button className="btn hero-btn">
            Take a Book <i class="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </div>
      <div className="section-one container">
        <div className="section-heading">
          <div className="left">
            <p>about us</p>
          </div>
          <div className="right">
            <h2>
              We create innovative, functional, and sustainable architectural
              designs that bring your vision to life.
            </h2>
          </div>
        </div>
        <div className="section-gallery">
          <div className="gallery-1">
            <p>1000+ Satisfied Customer in World Wide</p>
            <h5>200+</h5>
            <p id="right">Active projects</p>
          </div>
          <div className="gallery-2">
            <img src={image} alt="" />
          </div>
          <div className="gallery-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              deleniti doloremque vel eius ipsum.
            </p>
            <div className="residence">
              <div className="res-1">
                <i class="ri-compasses-2-fill"></i>
                <p>Commercial</p>
              </div>
              <div className="res-1">
                <i class="ri-compasses-2-fill"></i>
                <p>Industrial</p>
              </div>
            </div>
            <div className="residence">
              <div className="res-1">
                <i class="ri-compasses-2-fill"></i>
                <p>Commercial</p>
              </div>
              <div className="res-1">
                <i class="ri-compasses-2-fill"></i>
                <p>Commercial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

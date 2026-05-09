import React, { useRef } from "react";
import "./Home.css";
import image from "../../assets/naksha-banwao-3ddHcjHmiGw-unsplash.jpg";
import white_logo from "../../assets/white-logo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="hero container">
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
              deleniti.
            </p>
            <div className="residence">
              <div className="res-1">
                <i class="ri-compasses-2-fill"></i>
                <p>Commercial</p>
              </div>
              <div className="res-2">
                <i class="ri-pencil-ruler-2-line"></i>
                <p>Industrial</p>
              </div>
            </div>
            <div className="residence">
              <div className="res-3">
                <i class="ri-home-7-line"></i>
                <p>Residential</p>
              </div>
              <div className="res-4">
                <i class="ri-building-fill"></i>
                <p>Corporate</p>
              </div>
            </div>
            <button className="btn res3-btn">
              Know About Us <i class="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="section-two container">
        <div className="section-two-title">
          <p>our service</p>
          <h2>What we offer for you</h2>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-item">
              <i class="ri-home-9-fill"></i>
              <h3>Sustainable building</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card red">
            <div className="card-item">
              <i class="ri-compasses-2-fill"></i>
              <h3>Renovation & Remodeling</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <div className="card-item">
              <i class="ri-lightbulb-ai-fill"></i>
              <h3>Custom Construction</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-item">
              <i class="ri-home-5-line"></i>
              <h3>Project Management</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <div className="card-item">
              <i class="ri-hotel-fill"></i>
              <h3>Renovation & Remodeling</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <div className="card-item">
              <i class="ri-ruler-2-line"></i>
              <h3>Custom Construction</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div className="section-three container">
        <div className="free-estimate">
          <div className="free-container">
            <div className="free-left">
              <img src={white_logo} alt="" />
              <div className="left-text">
                <p>free estimate</p>
                <h3>request a quote</h3>
              </div>
            </div>
            <div className="free-middle"></div>
            <div className="free-right">
              <div className="services-list">
                <div className="card1">
                  <i class="ri-compasses-2-fill"></i>
                  <p>Commercial</p>
                </div>
                <div className="card2">
                  <i class="ri-pencil-ruler-2-line"></i>
                  <p>Industrial</p>
                </div>
                <div className="card1">
                  <i class="ri-home-7-line"></i>
                  <p>Residential</p>
                </div>
                <div className="card1">
                  <i class="ri-building-fill"></i>
                  <p>Corporate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="contact-form">
          <form action="">
            <input type="text" name="name" placeholder="Name*" required />
            <input type="text" name="email" placeholder="Email ID*" required />
            <input
              type="text"
              name="address"
              placeholder="Office Address*"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Select Your Work Type*"
              required
            />
            <input
              type="text"
              name="date"
              placeholder="Select Date*"
              required
            />
            <button type="submit" className="btn form-btn">
              Get Estimate Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

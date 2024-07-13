import './App.css';
import React, { useEffect } from "react";
// import { useState } from 'react';
import VanillaTilt from 'vanilla-tilt';// Import VanillaTilt


function App() {
  useEffect(() => {
    // Initialize VanillaTilt for all elements with the class 'card'
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
    });
  }, []); // Empty dependency array means this runs once on component mount

  const showMenu = () => {
    document.getElementById('navLinks').style.right = "0";
  };

  const hideMenu = () => {
    document.getElementById('navLinks').style.right = "-200px";
  };

  return (
    <div>
      <section id="section-1">
        <header id="header">
          <nav>
            <a href="index.html">
              <img src="images/logo.jpg" alt="Towing Nepal Logo" />
            </a>
            <div className="nav-links" id="navLinks">
              <i
                className="fa fa-times"
                style={{ position: 'absolute', left: '19px', top: '20px', fontSize: '19px' }}
                onClick={hideMenu}
              ></i>
              <ul>
                <li><a href="#section-1">Home</a></li>
                <li><a href="#section-2">About</a></li>
                <li><a href="#section-4">Services</a></li>
                <li>
                  <a href="https://sulove-gairhe.github.io/Towing-Nepal-Album/">Gallery</a>
                </li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <i
              className="fa fa-bars"
              style={{ position: 'absolute', right: '6%', top: '39px' }}
              onClick={showMenu}
            ></i>
          </nav>
        </header>

        <div className="container">
          <span>
            <h1 className="text-1">WELCOME TO TOWING NEPAL</h1>
            <p className="text-2"><strong>Professional Vehicle Towing</strong></p>
            <p className="text-3">all over Nepal</p>
          </span>
        </div>

        <div className="button-container">
          <a href="#section-2">Learn more</a>
        </div>
      </section>

      <section id="section-2">
        <div className="why">
          <p>Why you should<br />&nbsp; &ensp;choose us?</p>
        </div>

        <div className="container-2">
          <div className="card">
            <div className="content">
              <h3>24-hr Roadside Service</h3>
              <p>
                We provide an extensive list of services including breakdown
                coverage, flat tires, recovery, journey continuation, battery
                replacement, lock-up services, and more. We have 32 stations in
                Nepal to provide quality Roadside Assistance Service.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Jump Starting</h3>
              <p>
                We offer reliable and quick jump start and vehicle boosting
                services in Kathmandu and its surrounding areas. Whether you need
                battery jump starts or a vehicle boost, we can help you anytime
                which is handled by experts who do their job right the first time.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Automobile Training</h3>
              <p>
                The Two-wheeler & Four-wheeler automobile training program that
                makes a fresher joining any two-wheeler & four-wheeler
                manufacturing company “fit to work” in the assembly line directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section-3">
        <div className="custom-shape-divider-bottom-1632631636">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="custom-shape-divider-top-1632655987">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="membership">
          <h2>Worried about your <br />&nbsp; &nbsp; &ensp; &ensp; vehicle?</h2>
          <p>
            The last thing you want to worry about after an accident is how you
            are getting your vehicle to the auto body shop for repairs. Trust the
            experts at Towing Nepal for all your accident towing and recovery
            needs. We will tow your car to nearest dealership. Some videos and
            pictures will help you know better.
          </p>
        </div>

        <div className="membership-img">
          <img src="images/undraw_Process_re_gws7.png" alt="Membership Image" />
        </div>

        <div className="fb-link">
          <button
            onClick={() => location.href='https:sulove-gairhe.github.io/Towing-Nepal-Album/'}
            type="button"
          >
            Let's get started
          </button>
        </div>
      </section>

      <section id="section-4">
        <div className="services-main-container">
          <div className="child-main-container">
            <div className="main-topic">
              <h4>Remember us for emergency rescues</h4>
              <h1>Our Services</h1>
            </div>

            <div className="service-feature">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                placeat, error nostrum ducimus, laborum, animi assumenda sint nam
                nemo fuga consectetur quaerat delectus! Ea dolor obcaecati
                architecto excepturi praesentium aperiam quas unde, officia
                distinctio qui eum nisi doloremque corrupti minima quia beatae ab
                aut optio deserunt id fuga. Ut molestias soluta ea. Accusamus, a
                distinctio! voluptates possimus! Est deserunt, accusamus nam ab
                quae culpa ratione labore beatae perferendis, sequi recusandae
                nostrum voluptate dolorem dolor delectus placeat deleniti tempora?
              </p>
            </div>

            <div className="towing-buttons">
              <a href="docs/Phone number.pdf">Request A Rescue</a>
              <a href="docs/Rate of Towing.pdf">Our Towing Rate</a>
            </div>
          </div>

          <div className="img-container">
            <img src="images/towingg.jpg" alt="A towing picture" width="800px" />
          </div>
        </div>
      </section>

      <section id="section-5">

      </section>

      <footer>
        <div className="main-content">
          <div className="left box">
            <h2 style={{ color: '#fff' }}>About us</h2>
            <div className="content">
              <p style={{ color: '#fff' }}>
                The last thing you want to worry about after an accident is how
                you are getting your vehicle to the auto body shop for repairs.
                Trust the experts at Towing Nepal for all your accident towing and
                recovery needs. We will tow your car to nearest dealership. Get in
                touch with us today!
              </p>
              <div className="social">
                <a href="https://www.facebook.com/towinginnepal/" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-facebook-f" style={{ color: '#fff' }}></span>
                </a>
                <a href="https://twitter.com/nepaltowing?lang=en" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-twitter" style={{ color: '#fff' }}></span>
                </a>
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-instagram" style={{ color: '#fff' }}></span>
                </a>
                <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F%3Ftrk%3Donboarding-landing&trk=login_reg_redirect" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-linkedin" style={{ color: '#fff' }}></span>
                </a>
              </div>
            </div>
          </div>
          <div className="center box">
            <h2 style={{ color: '#fff' }}>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt" style={{ color: '#fff' }}></span>
                <span className="text" style={{ color: '#fff' }}>Gangalal, Kathmandu</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone-alt" style={{ color: '#fff' }}></span>
                <span className="text" style={{ color: '#fff' }}>+977-9802305050</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope" style={{ color: '#fff' }}></span>
                <span className="text" style={{ color: '#fff' }}>abc@example.com</span>
              </div>
            </div>
          </div>
          <div className="right box">
            <h2 style={{ color: '#fff' }}>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <div className="text" style={{ color: '#fff' }}>Email *</div>
                  <input type="email" required />
                </div>
                <div className="msg">
                  <div className="text" style={{ color: '#fff' }}>Message *</div>
                  <textarea rows="2" cols="25" required></textarea>
                </div>
                <div className="btn" style={{ color: '#fff' }}>
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="credit" style={{ color: '#fff' }}>
              Created By
              <a href="https://www.codingnepalweb.com">Towing Nepal</a> |
            </span>
            <span className="far fa-copyright" style={{ color: '#fff' }}></span>
            <span style={{ color: '#fff' }}> 2020 All rights reserved.</span>
          </center>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.94848362182!2d85.34086681539871!3d27.749734930233963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1d26b780c567%3A0x209925967fd2ea2f!2sTowing%20Nepal!5e0!3m2!1sen!2snp!4v1653666380220!5m2!1sen!2snp"
          width="2600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </footer>
    </div>
  );
}

export default App;

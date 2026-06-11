import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import suit1 from "/Images/newsuit.jpeg";

import "./Home.css";

const Home = () => {
  return (
    <header id="home">
      <div className="container home_container">
        <h5>Hello, I'm</h5>

        <h1>Mansuri Junaid</h1>

        <h5 className="text-light">
          Full Stack Developer | MERN Stack | Python Automation
        </h5>

        <p className="hero_description">
          I build scalable web applications, backend APIs, payment
          integrations, automation solutions, and enterprise software
          systems for businesses and startups.
        </p>

        <div className="cta">
          <a href="/Resume/mansuri.pdf" download className="btn">
            Download Resume
          </a>

          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
        </div>

        <div className="social">
          <a
            href="https://github.com/junaid-hbk"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/junaid-mansuri-tech"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>

        <div className="myimg">
          <img src={suit1} alt="Junaid" />
        </div>

        <a href="#contact" className="scrolldown">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
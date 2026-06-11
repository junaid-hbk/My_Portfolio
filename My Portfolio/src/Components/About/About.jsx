import React from "react";
import img from "/Images/hoodieimg.jpeg";

import "./About.css";

import { GiGraduateCap } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me_img">
            <img src={img} alt="Junaid" />
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">

            <article className="about_card">
              <GiGraduateCap className="about_icons" />

              <h5>Education</h5>

              <small>
                B.E. Information Technology
                <br />
                Mumbai University
              </small>
            </article>

            <article className="about_card">
              <BsCodeSlash className="about_icons" />

              <h5>Projects</h5>

              <small>
                4+ Major Projects
                <br />
                Full Stack & Automation
              </small>
            </article>

            <article className="about_card">
              <MdWorkOutline className="about_icons" />

              <h5>Services</h5>

              <small>
                Web Development
                <br />
                Automation Solutions
              </small>
            </article>

          </div>

          <p>
            I'm a Full Stack Developer specializing in MERN Stack,
            backend systems, secure payment integrations, Python
            automation, and enterprise software solutions.
            <br /><br />
            My focus is building scalable applications that solve
            real business problems and improve operational efficiency.
            I enjoy working with startups, agencies, and businesses
            looking to modernize their software systems.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;
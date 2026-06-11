import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Work With</h5>
      <h2>Technical Expertise</h2>

      <div className="container experience_container">

        {/* Frontend */}

        <div className="experience_card">
          <h3>Frontend Development</h3>

          <div className="experience_content">

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">
                  Component Based Development
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  ES6+ & Modern Frontend
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">
                  Semantic Markup
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">
                  Responsive UI Design
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">
                  Rapid UI Development
                </small>
              </div>
            </article>

          </div>
        </div>

        {/* Backend */}

        <div className="experience_card">
          <h3>Backend Development</h3>

          <div className="experience_content">

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">
                  API Development
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">
                  Backend Architecture
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">
                  NoSQL Database Design
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">
                  Relational Databases
                </small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">
                  Automation & Scripting
                </small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
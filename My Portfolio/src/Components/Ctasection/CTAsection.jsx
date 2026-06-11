import React from "react";
import "./CTAsection.css";

const CTASection = () => {
  return (
    <section id="hireme">
      <div className="container cta_section">

        <h2>Let's Build Something Great Together</h2>

        <p>
          Looking for a developer to build a web application,
          backend system, API integration, or automation solution?
          Let's discuss your project.
        </p>

        <a
          href="mailto:junaidmansuri989@gmail.com"
          className="btn btn-primary"
        >
          Hire Me
        </a>

      </div>
    </section>
  );
};

export default CTASection;
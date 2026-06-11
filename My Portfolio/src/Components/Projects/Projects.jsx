import React from "react";
import "./Projects.css";

import tubeTweetImg from "/Images/Tubetweet.png";
import tubeTweetImg2 from "/Images/Tubetweet2.png";
import tubeTweetImg3 from "/Images/Tubetweet3.png";

import engineerImg from "/Images/engineer_system.png";
import stripeImg from "/Images/stripe-payment.png";
import automationImg from "/Images/Automation.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>Portfolio</h5>
      <h2>Featured Projects</h2>

      <div className="container project_container">

        {/* TubeTweet */}

        <article className="project_item">

          <div className="project_item_image">
            <img src={tubeTweetImg2} alt="TubeTweet" />
          </div>

          <div className="project_gallery">
            <img src={tubeTweetImg} alt="TubeTweet Screenshot" />
            <img src={tubeTweetImg3} alt="TubeTweet Screenshot" />
          </div>

          <h3>TubeTweet Platform</h3>

          <p className="project_desc">
            Full-stack social media platform inspired by YouTube and Twitter.
            Users can create accounts, upload videos, manage profiles,
            interact with tweets, subscribe to channels, create playlists,
            and use AI-powered content features.
          </p>

          <div className="tech_stack">
            React • Node.js • Express • MongoDB • JWT • Cloudinary
          </div>

          <div className="project_item_btn">
            <a
              href="https://github.com/junaid-hbk/Tube_Tweet"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <a
              href="https://tube-tweet-alpha.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>

        </article>

        {/* Field Engineer */}

        <article className="project_item">

          <div className="project_item_image">
            <img src={engineerImg} alt="Field Engineer System" />
          </div>

          <h3>Field Engineer Management System</h3>

          <p className="project_desc">
            Enterprise-grade workforce management platform designed
            for field operations. Includes authentication,
            engineer onboarding, ticket workflows, reporting,
            assignment tracking, communication systems,
            and operational management.
          </p>

          <div className="tech_stack">
            React • Node.js • MongoDB • Socket.IO • Cloudinary • JWT
          </div>

          <div className="project_item_btn">
            <span className="private_project">
              Private Client Project
            </span>
          </div>

        </article>

        {/* Stripe */}

        <article className="project_item">

          <div className="project_item_image">
            <img src={stripeImg} alt="Stripe Payment Backend" />
          </div>

          <h3>Stripe Payment Processing API</h3>

          <p className="project_desc">
            Secure payment processing backend built using Stripe APIs.
            Handles payment creation, transaction verification,
            webhooks, customer payments, and modern payment workflows.
          </p>

          <div className="tech_stack">
            Node.js • Express • Stripe • Webhooks • REST API
          </div>

          <div className="project_item_btn">
            <span className="private_project">
              Backend Project
            </span>
          </div>

        </article>

        {/* Automation */}

        <article className="project_item">

          <div className="project_item_image">
            <img src={automationImg} alt="Automation System" />
          </div>

          <h3>Business Automation Platform</h3>

          <p className="project_desc">
            Python-based automation solution developed to reduce
            manual effort, automate business workflows,
            process data, generate reports,
            and improve operational efficiency.
          </p>

          <div className="tech_stack">
            Python • Automation • APIs • Data Processing • Reporting
          </div>

          <div className="project_item_btn">
            <span className="private_project">
              Confidential Client Solution
            </span>
          </div>

        </article>

      </div>
    </section>
  );
};

export default Projects;
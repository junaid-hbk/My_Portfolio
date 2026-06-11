import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Can Do For You</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className="service_card">
          <h3>Full Stack Web Development</h3>

          <p>
            End-to-end web application development using React,
            Node.js, Express, and MongoDB with scalable architecture,
            authentication, dashboards, and responsive UI.
          </p>
        </article>

        <article className="service_card">
          <h3>Custom Backend APIs</h3>

          <p>
            REST API development, JWT authentication,
            database design, Stripe integrations,
            cloud storage, and secure backend systems.
          </p>
        </article>

        <article className="service_card">
          <h3>Business Automation</h3>

          <p>
            Python automation solutions for repetitive business
            processes, reporting workflows, data extraction,
            file processing, and operational efficiency.
          </p>
        </article>

        <article className="service_card">
          <h3>Payment Gateway Integration</h3>

          <p>
            Stripe payment processing, subscriptions,
            webhook handling, transaction validation,
            and secure payment workflows.
          </p>
        </article>

        <article className="service_card">
          <h3>Enterprise Software Solutions</h3>

          <p>
            Internal business systems, engineer management,
            workflow automation, reporting dashboards,
            and operational platforms.
          </p>
        </article>

        <article className="service_card">
          <h3>Maintenance & Support</h3>

          <p>
            Bug fixing, feature enhancements,
            performance optimization,
            deployment support, and long-term maintenance.
          </p>
        </article>

      </div>
    </section>
  );
};

export default Services;
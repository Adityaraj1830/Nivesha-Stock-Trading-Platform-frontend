import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Why Nivesha?</h1>
        <p className="text-muted fs-5">
          Built as a learning-focused financial platform to understand how modern
          trading and investment systems work.
        </p>
      </div>

      {/* Features */}
      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <i className="bi bi-graph-up-arrow fs-1 text-primary"></i>
          <h5 className="mt-3">Market Simulation</h5>
          <p className="text-muted">
            Experience real-world trading behavior using simulated market data
            and interactive components.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <i className="bi bi-window fs-1 text-primary"></i>
          <h5 className="mt-3">Clean & Modern UI</h5>
          <p className="text-muted">
            Designed with a focus on clarity, usability, responsiveness, and
            industry-style layouts.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <i className="bi bi-book fs-1 text-primary"></i>
          <h5 className="mt-3">Educational First</h5>
          <p className="text-muted">
            Every feature supports learning, experimentation, and understanding
            of financial concepts.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <i className="bi bi-cpu fs-1 text-primary"></i>
          <h5 className="mt-3">Technology Driven</h5>
          <p className="text-muted">
            Built using React, reusable components, routing, and clean
            architectural practices.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <i className="bi bi-diagram-3 fs-1 text-primary"></i>
          <h5 className="mt-3">Project-Oriented Design</h5>
          <p className="text-muted">
            Structured to demonstrate real-world application design for academic
            evaluation and portfolios.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <i className="bi bi-arrows-fullscreen fs-1 text-primary"></i>
          <h5 className="mt-3">Scalable Vision</h5>
          <p className="text-muted">
            Designed with future expansion in mind, allowing new features and
            modules to be added easily.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-4">
        <Link to="/signup" className="btn btn-primary btn-lg px-5">
          Sign up now
        </Link>
      </div>
    </div>
  );
}

export default Universe;

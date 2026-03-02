import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We are building a modern learning-first platform for financial markets
          <br />
          driven by technology, simplicity, and transparency.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Nivesha was conceptualized with the objective of simplifying how
            individuals understand trading, investing, and financial markets
            using intuitive design and technology-driven tools. The platform
            was developed as an academic initiative focused on learning,
            experimentation, and simulation.
          </p>

          <p>
            By combining clean interfaces with structured market concepts,
            Nivesha aims to demonstrate how modern financial platforms are built
            and how users interact with real-world trading systems.
          </p>

          <p>
            Thousands of learners and aspiring developers explore simulated
            workflows, market visualizations, and platform features through
            Nivesha to gain practical exposure to financial technology systems.
          </p>
        </div>

        <div className="col-6 p-5">
          <p>
            In addition to platform features, Nivesha emphasizes open learning,
            community-driven exploration, and transparent access to educational
            financial resources.
          </p>

          <p>
            <Link to="/" style={{ textDecoration: "none" }}>
              Nivesha Labs
            </Link>
            , our experimental and research-focused initiative, explores ideas
            at the intersection of finance, technology, and user experience,
            supporting innovation in financial education.
          </p>

          <p>
            The platform continues to evolve as new concepts, tools, and
            simulations are introduced to help users better understand how
            financial markets and investment platforms operate in practice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
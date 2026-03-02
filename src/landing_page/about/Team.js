import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/Media/images/images/Aditya.jpeg"
            style={{
              borderRadius: "50%",
              width: "50%",
              height: "auto",
              objectFit: "cover",
            }}
            alt="Aditya Raj"
          />
          <h4 className="mt-5">Aditya Raj</h4>
          <h6>Founder & Platform Architect</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Aditya conceptualized and developed Nivesha as an academic initiative
            to explore how modern financial platforms are designed.
          </p>

          <p>
            Connect on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
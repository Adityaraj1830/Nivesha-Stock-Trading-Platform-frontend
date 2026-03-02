import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="/Media/images/images/education.svg"
            style={{ width: "70%" }}
            alt="Education Illustration"
          />
        </div>

        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and accessible market education</h1>

          <p>
            Learn is Nivesha’s learning platform covering investing basics to
            advanced concepts.
          </p>

          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Versity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
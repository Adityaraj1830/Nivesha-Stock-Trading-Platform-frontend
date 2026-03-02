import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mb-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <Link to="/support/track" style={{ textDecoration: "none" }}>
          Track Tickets
        </Link>
      </div>

      <div className="row p-5 mx-3 mt-4">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for help or explore topics to raise a support request
          </h1>

          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />

          <Link to="/support/account-opening" className="d-block mb-2">
            Track account opening
          </Link>

          <Link to="/support/segment-activation" className="d-block mb-2">
            Track segment activation
          </Link>

          <Link to="/support/margins" className="d-block mb-2">
            Intraday margins
          </Link>

          <Link to="/support/platform-guide" className="d-block mb-2">
            Platform guide
          </Link>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3 mb-3">Featured</h1>

          <ol>
            <li>
              <Link to="/support/circulars">
                Important circulars & regulatory updates – 2025
              </Link>
            </li>

            <li>
              <Link to="/support/leverage-rules">
                Latest intraday leverage rules for equities
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
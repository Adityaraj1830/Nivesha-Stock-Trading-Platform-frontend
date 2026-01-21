import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mb-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-3 mt-4">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for help or explore topics to raise a support request
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Platform guide</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol>
            <li>
              <a href="">Important circulars & regulatory updates – 2025</a>
            </li>
            <li>
              <a href="">Latest intraday leverage rules for equities</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;



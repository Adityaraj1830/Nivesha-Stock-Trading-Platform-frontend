import React from "react";

function CreateTicket() {
  const linkStyle = {
    textDecoration: "none",
    lineHeight: "2.5",
    background: "none",
    border: "none",
    padding: 0,
    color: "#0d6efd",
    cursor: "pointer",
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">
          To create a ticket, select a relevant topic
        </h1>

        {/* Column 1 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
            Learning & Account Setup
          </h4>

          <button style={linkStyle}>Getting started with Nivesha</button><br />
          <button style={linkStyle}>Creating a demo account</button><br />
          <button style={linkStyle}>Understanding simulated trading</button><br />
          <button style={linkStyle}>Academic usage guidelines</button><br />
          <button style={linkStyle}>Project scope & limitations</button><br />
        </div>

        {/* Column 2 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
            Profile & Platform Basics
          </h4>

          <button style={linkStyle}>Login & access issues</button><br />
          <button style={linkStyle}>Updating user profile</button><br />
          <button style={linkStyle}>Understanding dashboard sections</button><br />
          <button style={linkStyle}>Navigation & UI help</button><br />
          <button style={linkStyle}>Password & security basics</button><br />
        </div>

        {/* Column 3 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-line-chart" aria-hidden="true"></i>{" "}
            Trading Concepts & Tools
          </h4>

          <button style={linkStyle}>Understanding order types</button><br />
          <button style={linkStyle}>Charts & indicators overview</button><br />
          <button style={linkStyle}>Simulated trades explained</button><br />
          <button style={linkStyle}>Market data interpretation</button><br />
          <button style={linkStyle}>Common trading mistakes</button><br />
        </div>

        {/* Column 4 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-money" aria-hidden="true"></i>{" "}
            Funds & Simulations
          </h4>

          <button style={linkStyle}>Virtual funds allocation</button><br />
          <button style={linkStyle}>Resetting demo balance</button><br />
          <button style={linkStyle}>Profit & loss calculation</button><br />
          <button style={linkStyle}>Margin concepts (educational)</button><br />
          <button style={linkStyle}>Simulation limitations</button><br />
        </div>

        {/* Column 5 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-bar-chart" aria-hidden="true"></i>{" "}
            Reports & Insights
          </h4>

          <button style={linkStyle}>Viewing trade history</button><br />
          <button style={linkStyle}>Performance summaries</button><br />
          <button style={linkStyle}>Learning from analytics</button><br />
          <button style={linkStyle}>Portfolio breakdown</button><br />
          <button style={linkStyle}>Exporting reports (demo)</button><br />
        </div>

        {/* Column 6 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-cubes" aria-hidden="true"></i>{" "}
            Platform Modules
          </h4>

          <button style={linkStyle}>Product overview</button><br />
          <button style={linkStyle}>Pricing explanation (demo)</button><br />
          <button style={linkStyle}>Educational resources</button><br />
          <button style={linkStyle}>Support workflow</button><br />
          <button style={linkStyle}>Future enhancements</button><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
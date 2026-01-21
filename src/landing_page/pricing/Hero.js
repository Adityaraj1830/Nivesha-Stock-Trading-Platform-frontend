import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Transparent, simple, and designed purely for learning
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="/Media/images/images/pricingEquity.svg" alt="Equity Learning" />
          <h1 className="fs-3">Free Learning Modules</h1>
          <p className="text-muted">
            All market learning content, simulations, and platform features are
            completely free to access for educational and academic use.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/Media/images/images/intradayTrades.svg" alt="Simulation" />
          <h1 className="fs-3">Trading Simulations</h1>
          <p className="text-muted">
            Practice intraday and derivative trading concepts through simulated
            workflows that demonstrate how real platforms operate.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/Media/images/images/pricingEquity.svg" alt="Investing" />
          <h1 className="fs-3">Investment Concepts</h1>
          <p className="text-muted">
            Explore long-term investing ideas, mutual fund concepts, and
            portfolio structures without any real financial transactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

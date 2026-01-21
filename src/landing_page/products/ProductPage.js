import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="/Media/images/images/kite.png"
        productName="Nivesha Trade"
        productDesription="A fast and intuitive trading simulation platform designed to help users understand market movements, charts, and order execution through a clean and modern interface. Accessible across web and mobile devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="/Media/images/images/console.png"
        productName="Nivesha Console"
        productDesription="A centralized dashboard that provides insights into simulated trades, portfolio performance, and learning progress through detailed reports and visual analytics."
        learnMore=""
      />

      <LeftSection
        imageURL="/Media/images/images/coin.png"
        productName="Nivesha Invest"
        productDesription="Explore long-term investing concepts through commission-free mutual fund simulations delivered in a structured and easy-to-understand format for learners."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="/Media/images/images/kiteconnect.png"
        productName="Nivesha API"
        productDesription="Experiment with market data and trading workflows using simple APIs designed for academic exploration, prototyping, and understanding how modern fintech platforms integrate systems."
        learnMore=""
      />

      <LeftSection
        imageURL="/Media/images/images/varsity.png"
        productName="Nivesha Learn"
        productDesription="A mobile-first learning platform offering simplified lessons on stock markets, investing principles, and financial concepts through structured modules and visual explanations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 mb-5">
        Curious to explore how modern financial platforms are designed and
        built? Visit the Nivesha technology and learning resources.
      </p>

      <Universe />
    </>
  );
}

export default ProductPage;

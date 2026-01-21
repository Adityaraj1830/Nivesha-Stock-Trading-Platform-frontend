import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="/Media/images/images/Nnivesha.png" style={{ width: "50%" }} />
            <p>
              &copy; 2024 – 2025, Nivesha Technologies Pvt. Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Technology</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Sustainability initiatives</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Help center</a>
            <br />
            <a href="">community forum</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">Learning challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Nivesha Technologies Pvt. Ltd. is a technology-driven platform developed with
            the objective of providing users with intuitive tools for learning,
            simulation, and a deeper understanding of financial markets. The platform
            focuses on demonstrating how modern trading and investment systems operate,
            including market data visualization, portfolio analysis, and user interface
            design commonly used in financial applications.This platform has been created solely as a learning-oriented project to
            demonstrate concepts related to financial technology and modern web
            application design. Nivesha is not a registered brokerage service and does not
            offer live trading, investment advisory, or real-time market execution.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Nivesha does not provide stock tips, guaranteed returns, or personalized
            financial advice of any kind. The platform is not intended to influence or
            guide real investment decisions, and users should not treat any information
            displayed here as professional or financial guidance. Any resemblance to real
            platforms, companies, products, or services is purely coincidental and is used
            only for educational illustration and design reference purposes.

          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
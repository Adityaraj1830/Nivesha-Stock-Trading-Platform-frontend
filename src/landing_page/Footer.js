import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="/Media/images/images/Nnivesha.png"
              style={{ width: "50%" }}
              alt="Nivesha Logo"
            />
            <p>
              &copy; 2024 – 2025, Nivesha Technologies Pvt. Ltd. All rights
              reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col">
            <p><strong>Company</strong></p>
            <Link to="/about">About</Link><br />
            <Link to="/products">Products</Link><br />
            <Link to="/pricing">Pricing</Link><br />
            <Link to="/referral">Referral programme</Link><br />
            <Link to="/careers">Careers</Link><br />
            <Link to="/technology">Technology</Link><br />
            <Link to="/press">Press & media</Link><br />
            <Link to="/sustainability">Sustainability initiatives</Link><br />
          </div>

          {/* Support */}
          <div className="col">
            <p><strong>Support</strong></p>
            <Link to="/contact">Contact</Link><br />
            <Link to="/support">Help center</Link><br />
            <Link to="/community">Community forum</Link><br />
            <Link to="/pricing">List of charges</Link><br />
            <Link to="/resources">Downloads & resources</Link><br />
          </div>

          {/* Account */}
          <div className="col">
            <p><strong>Account</strong></p>
            <Link to="/signup">Open an account</Link><br />
            <Link to="/fund-transfer">Fund transfer</Link><br />
            <Link to="/learning">Learning challenge</Link><br />
          </div>
        </div>

        {/* Legal Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Nivesha Technologies Pvt. Ltd. is a technology-driven platform developed
            to provide intuitive tools for learning and simulation of financial markets.
            This platform is created solely as a learning-oriented project and does not
            offer live trading, investment advisory, or real-time market execution.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all
            related documents carefully before investing.
          </p>

          <p>
            Nivesha does not provide stock tips, guaranteed returns, or personalized
            financial advice of any kind. The platform is strictly for educational
            and demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
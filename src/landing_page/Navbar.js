import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/Media/images/images/Nnivesha.png"
            alt="Nivesha"
            className="navbar-logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>            
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/products">Product</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

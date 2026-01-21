import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">User-first approach</h2>
          <p className="text-muted">
            At Nivesha, every feature is designed with the user in mind, ensuring
            a reliable and transparent investing experience.
          </p>
          <h2 className="fs-4">No distractions, no noise</h2>
          <p className="text-muted">
            No spam, gimmicks, or unnecessary alerts. Just clean, intuitive
            tools that let you trade and invest at your own pace.
          </p>
          <h2 className="fs-4">The Nivesha ecosystem</h2>
          <p className="text-muted">
            More than just a platform, Nivesha brings together powerful tools
            and services to support your investing journey.
          </p>
          <h2 className="fs-4">Build better financial habits</h2>
          <p className="text-muted">
            Nivesha is built to help users make informed decisions and develop
            long-term financial discipline.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="/Media/images/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
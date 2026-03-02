import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            {tryDemo && <a href={tryDemo}>Try Demo</a>}
            {learnMore && (
              <a href={learnMore} style={{ marginLeft: "50px" }}>
                Learn More
              </a>
            )}
          </div>

          <div className="mt-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="/Media/images/images/googlePlayBadge.svg"
                  alt="Google Play"
                />
              </a>
            )}

            {appStore && (
              <a href={appStore}>
                <img
                  src="/Media/images/images/appstoreBadge.svg"
                  alt="App Store"
                  style={{ marginLeft: "50px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
import React, { useState } from "react";
import "./Signup.css";
import { motion } from "framer-motion";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Format phone number: 98765 43210
  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    const match = cleaned.match(/^(\d{0,5})(\d{0,5})$/);
    if (match) {
      return match[1] + (match[2] ? " " + match[2] : "");
    }
    return cleaned;
  };

  const handleMobileChange = (e) => {
    setMobile(formatPhone(e.target.value));
  };

  const handleContinue = () => {
    if (mobile.replace(/\s/g, "").length === 10) {
      setStep(2);
    } else {
      alert("Enter valid 10 digit number");
    }
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      setShowSuccess(true);
    } else {
      alert("Enter 6 digit OTP");
    }
  };

  return (
    <motion.div
     className="signup-wrapper"
     initial={{ opacity: 0, y: 40 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -40 }}
     transition={{ duration: 0.4 }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-12">

            <div className="signup-card">

              {step === 1 && (
                <>
                  <h2 className="mb-3 fw-bold">Open Your Trading Account</h2>
                  <p className="mb-4">
                    Create your free account and start investing smarter.
                  </p>

                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      value={mobile}
                      onChange={handleMobileChange}
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  <button
                    className="btn signup-btn w-100"
                    onClick={handleContinue}
                  >
                    Continue →
                  </button>
                </>
              )}

              {step === 2 && (
                <div className="otp-screen">
                  <h2 className="mb-3 fw-bold">Verify OTP</h2>
                  <p className="mb-4">
                    Enter the 6-digit OTP sent to +91 {mobile}
                  </p>

                  <input
                    type="text"
                    className="form-control text-center mb-3"
                    maxLength="6"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Enter OTP"
                  />

                  <button
                    className="btn signup-btn w-100 mb-2"
                    onClick={handleVerify}
                  >
                    Verify →
                  </button>

                  <button
                    className="btn btn-light w-100"
                    onClick={() => setStep(1)}
                  >
                    ← Back
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* ✅ SUCCESS MODAL */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <h3>🎉 Account Created!</h3>
            <p>Your trading account has been successfully created.</p>
            <button
              className="btn signup-btn w-100 mt-3"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </motion.div>
  );
};

export default Signup;
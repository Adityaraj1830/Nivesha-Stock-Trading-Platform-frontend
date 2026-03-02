import React, { useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import "./Signup.css";

const Signup = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Format phone: 98765 43210
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

  // ✅ Correct Recaptcha Setup (Firebase v9 syntax)
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("Recaptcha verified");
          }
        }
      );
    }
  };

  const handleContinue = async () => {
    const cleanedNumber = mobile.replace(/\s/g, "");

    if (cleanedNumber.length !== 10) {
      alert("Enter valid 10 digit number");
      return;
    }

    try {
      setupRecaptcha();

      const appVerifier = window.recaptchaVerifier;
      const fullPhoneNumber = "+91" + cleanedNumber;

      const result = await signInWithPhoneNumber(
        auth,
        fullPhoneNumber,
        appVerifier
      );

      setConfirmationResult(result);
      setStep(2);
    } catch (error) {
      console.log("Firebase Error Code:", error.code);
      console.log("Firebase Error Message:", error.message);
      alert(error.message);
    }
  };

  const handleVerify = async () => {
    if (!confirmationResult) return;

    try {
      await confirmationResult.confirm(otp);
      setShowSuccess(true);
    } catch (error) {
      alert("Invalid OTP");
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
                  <h2 className="mb-3 fw-bold">
                    Open Your Trading Account
                  </h2>

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
                    Send OTP →
                  </button>

                  {/* Required container for reCAPTCHA */}
                  <div id="recaptcha-container"></div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="mb-3 fw-bold">Verify OTP</h2>

                  <input
                    type="text"
                    className="form-control text-center mb-3"
                    maxLength="6"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Enter 6-digit OTP"
                  />

                  <button
                    className="btn signup-btn w-100"
                    onClick={handleVerify}
                  >
                    Verify →
                  </button>
                </>
              )}

            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <h3>🎉 Account Created!</h3>
            <p>Phone number verified successfully.</p>
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
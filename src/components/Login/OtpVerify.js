import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendOTP } from "./SignIn";
import { useEffect } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

const verifyOtp = async (phoneNo, requestId, OTP) => {
  let otp = `${OTP[0]}${OTP[1]}${OTP[2]}${OTP[3]}`;
  otp = otp.toString();
//   console.log(phoneNo, requestId, otp);

  try {
    let resp = await axios.post(
      "https://dev.api.goongoonalo.com/v1/auth/verify_otp",
      {
        phoneNumber: `+${phoneNo}`,
        requestId,
        otp: otp, // Join the array to form a string
      }
    );

    console.log(resp);
  } catch (error) {
    console.error(error.response); // Log the error response
  }
};
function OtpVerify() {
  const navigate = useNavigate();
  const location = useLocation();
  const [verifData, setVerifData] = useState({
    requestId: "",
    phoneNo: "",
  });

 const [otp, setOtp] = useState(new Array(4).fill(""));
 const otpBoxReference = useRef([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const requestId = queryParams.get("requestId");
    const phoneNo = queryParams.get("phoneNo");

    // console.log(phoneNo, requestId)

    setVerifData({ requestId, phoneNo });
  }, []);

  const handleChange = (value, index) => {
    

    if (!isNaN(value) && value !== "") {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
    }
      // Move focus to the next input
      if (value && index < otp.length - 1) {
        otpBoxReference.current[index + 1].focus();
      }
  };


  const resendOTP = async () => {
    const resp = await sendOTP(verifData.phoneNo);
    setVerifData({ ...verifData, requestId: resp.data.requestId });
  };

  const funOTPVerif = async (e) => {
    e.preventDefault();
    await verifyOtp(verifData.phoneNo, verifData.requestId, otp);

    if (otp.join("") === "5678") {
      <Alert severity="success" color="info">
        Verified Successfully
      </Alert>;
      sessionStorage.setItem("authenticated", true);
      navigate("/");
    } else {
      <Alert severity="error" color="info">
        please enter a valid otp
      </Alert>;
    }
  };

  return (
    <div className="vefifContainer w-screen h-screen flex justify-center items-center">
      <form className="mx-auto w-[414px] h-[334px] flex flex-col justify-between">
        <h1 className="text-3xl font-semibold text-purple-700">
          OTP Verification
        </h1>
        <p className="text-sm font-normal text-gray-700">
          We have sent an OTP to +{verifData.phoneNo}. Please enter the code
          received to verify.
        </p>
        <div className="otp-container flex justify-between">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(reference) => (otpBoxReference.current[index] = reference)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-14 h-14 text-2xl text-center border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          ))}
        </div>
        <button
          className="w-full h-14 text-lg font-bold text-white bg-purple-700 rounded-md focus:outline-none transition duration-300 ease-in-out hover:bg-purple-800"
          onClick={funOTPVerif}
        >
          Verify
        </button>
        <h3
          className="text-base font-light text-gray-700 text-center underline cursor-pointer"
          onClick={resendOTP}
        >
          Resend OTP
        </h3>
        <Link
          to="/login"
          className="text-base font-light text-gray-700 text-center underline"
        >
          Use another number
        </Link>
      </form>
    </div>
  );
}

export default OtpVerify;

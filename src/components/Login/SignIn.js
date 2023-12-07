import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const sendOTP = async (phNo) => {
  try {
    let data = await axios.post(
      "https://dev.api.goongoonalo.com/v1/auth/login",
      {
        phoneNumber: `+${phNo}`,
      }
    );

    if (data.status === 200) {
      <Alert severity="success" color="info">
        {data.data.message}
      </Alert>; //showing success toast if request sucessfully sent
      // return data.data;
    }

    return data;
  } catch (error) {
    console.log(error);
    <Alert severity="error" color="info">
      Enter a valid phone no
    </Alert>;
  }
};

function SignIn() {
  const [phoneNO, setPhoneNO] = useState("");
  const navigate = useNavigate();
  const sendDataForVerification = (variable1, variable2) => {
    const queryParams = new URLSearchParams({
      requestId: variable1,
      phoneNo: variable2,
    });

    navigate(`/verify?${queryParams.toString()}`);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!phoneNO) {
      <Alert severity="error" color="info">
        Enter a valid phone no
      </Alert>;
    } else {
      try {
        const response = await sendOTP(phoneNO);
        if (response.status === 200) {
          sendDataForVerification(response.data.requestId, phoneNO);
        } else {
          <Alert severity="error" color="info">
            Enter a valid phone no
          </Alert>;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (newValue) => {
    setPhoneNO(newValue);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="mx-auto w-[414px] h-[238px] flex flex-col justify-between">
        <h1 className="text-3xl font-semibold text-purple-700">Sign In</h1>
        <p className="text-sm font-normal text-gray-700">
          Please enter your mobile number to login. We will send an OTP to
          verify your number.
        </p>
        <div className="w-full">
          <MuiTelInput
            value={phoneNO}
            onChange={handleChange}
            className="w-full"
            defaultCountry="IN"
            placeholder="Phone Number"
          />
        </div>
        <button
          className="w-full h-14 text-lg font-bold text-white bg-purple-700 rounded-md focus:outline-none transition duration-300 ease-in-out hover:bg-purple-800"
          onClick={submitHandler}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;

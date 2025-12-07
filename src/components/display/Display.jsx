import React from "react";
import { getLoginDetails } from "../login/loginslice";
import { useSelector } from "react-redux";

const Display = () => {
  const loginDetails = useSelector(getLoginDetails);
  console.log("loginDetails:", loginDetails);
  return (
    <div>
      <h1>Display</h1>
      <p>username:{loginDetails.userName}</p>
      <p>username:{loginDetails.email}</p>
      <p>username:{loginDetails.password}</p>
    </div>
  );
};

export default Display;

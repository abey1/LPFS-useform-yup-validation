import React from "react";
import LoginHelper from "./LoginHelper";
import Display from "../display/Display.jsx";
const Login = () => {
  return (
    <>
      <h2 className="mb-4 text-5xl capitalize">
        implement useForm, yup and redux
      </h2>
      <div className="flex gap-x-7">
        <LoginHelper />
        <Display />
      </div>
    </>
  );
};

export default Login;

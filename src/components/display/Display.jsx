import React from "react";
import { getLoginDetails } from "../login/loginslice";
import { useSelector } from "react-redux";

const Display = () => {
  const loginDetails = useSelector(getLoginDetails);
  console.log("loginDetails:", loginDetails);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-200 rounded-lg max-w-md mx-auto mt-20">
        <table>
          <thead>
            <tr>
              <td colSpan="2">
                <h2 className="text-5xl capitalize mb-5 text-center">
                  you submited
                </h2>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-right">User Name :</td>
              <td className="text-left">{loginDetails.userName}</td>
            </tr>
            <tr>
              <td className="text-right">Email :</td>
              <td className="text-left">{loginDetails.email}</td>
            </tr>
            <tr>
              <td className="text-right">Password :</td>
              <td className="text-left">{loginDetails.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;

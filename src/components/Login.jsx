import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object({
    username: yup.string().required("username is required"),
    email: yup.string().email("email is invalid").required("email is required"),
    password: yup
      .string()
      .min(6, "password must be at least 6 characters")
      .required("password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div className="p-10 bg-gray-200 rounded-lg max-w-md mx-auto mt-20">
      <h1 className="mb-4">Login</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col items-start">
            <label htmlFor="username" className="capitalize mb-4">
              username:
            </label>
            <input
              className="border border-indigo-500 p-4 rounded-lg"
              type="text"
              name="username"
              {...register("username")}
            />
            <p className="text-red-500">{errors.username?.message}</p>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="capitalize mb-4">
              email:{" "}
            </label>
            <input
              type="text"
              name="email"
              className="border border-indigo-500 p-4 rounded-lg"
              {...register("email")}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="password" className="capitalize mb-4">
              password:
            </label>
            <input
              type="text"
              name="email"
              className="border border-indigo-500 p-4 rounded-lg"
              {...register("password")}
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <button className="w-full mt-4">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

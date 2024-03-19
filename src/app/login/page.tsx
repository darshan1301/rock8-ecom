"use client";

import ModalBox from "@/components/ui/ModalBox";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
      <ModalBox>
        <div className="text-center">
          <h1 className=" text-2xl font-bold">Login</h1>
          <h2 className=" text-2xl font-medium mt-6">
            Welcome back to ECOMMERCE
          </h2>
          <p>{"The next gen business marketplace"}</p>
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="">Email</label>
          <input
            className="border p-2 w-96 placeholder:text-xs border-gray-300 rounded-md mt-1"
            type="email"
            name="email"
            placeholder="Enter Email Id"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="">Password</label>
          <div className="border rounded-md items-center">
            <input
              className="p-2 placeholder:text-xs w-80 text-sm focus:outline-none border-gray-300 rounded-md"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
            />
            <button
              onClick={onShowPassword}
              className="text-sm self-end font-medium underline focus:outline-none">
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <button className="w-full bg-stone-950 text-white text-sm uppercase mt-8 p-4 rounded-lg">
            Login
          </button>
        </div>

        <div className="flex w-full mt-10 justify-center space-x-4 text-base">
          <p>{"Don't have an account?"}</p>

          <Link href={"/signup"} className=" uppercase  font-bold">
            Signup
          </Link>
        </div>
      </ModalBox>
    </div>
  );
};

export default Login;

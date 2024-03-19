import ModalBox from "@/components/ui/ModalBox";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div>
      <ModalBox>
        <h1 className="text-center text-2xl font-bold">Create Your Account</h1>
        <div className="flex flex-col w-full">
          <label className="">Name</label>
          <input
            className="border p-2 w-96 placeholder:text-xs border-gray-300 rounded-md mt-1"
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="">Email</label>
          <input
            className="border p-2 placeholder:text-xs border-gray-300 rounded-md mt-1"
            type="email"
            name="email"
            placeholder="Enter Email Id"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="">Password</label>
          <input
            className="border p-2 placeholder:text-xs border-gray-300 rounded-md mt-1"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </div>

        <div className="flex flex-col w-full">
          <button className="w-full bg-stone-950 text-white text-sm uppercase mt-8 p-4 rounded-lg">
            Create Account
          </button>
        </div>

        <div className="flex w-full mt-10 justify-center space-x-4 text-base">
          <p>Have an Account?</p>

          <Link href={"/login"} className=" uppercase  font-bold">
            Login
          </Link>
        </div>
      </ModalBox>
    </div>
  );
};

export default Signup;

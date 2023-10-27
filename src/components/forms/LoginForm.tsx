"use client";
import React, { useState } from "react";
import Image from "next/image";

const LoginForm = () => {
  const [signup, setSignup] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <form className="bg-white w-[40%] rounded-md p-8 flex flex-col gap-4 justify-center">
      <div className="flex flex-col gap-1 justify-center">
        <h1 className="text-xl font-semibold text-[#051721] tracking-wider">
          Login
        </h1>
        <p className="text-[#37454D] text-xs opacity-90">
          Login to access your Phnes.Travels account
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xs font-medium">Email</h1>
        <input
          type="email"
          name="email"
          placeholder="ann.pine@gmail.com"
          className="p-2 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-xs"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xs font-medium">Password</h1>
        <input
          type="password"
          name="password"
          placeholder="•••••••••••••••••"
          className="p-2 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-xs"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" />
          <p className="text-xs font-medium">Remember me</p>
        </div>
        <p className="text-xs text-[#FF6F6B]">Forgot Password?</p>
      </div>
      <button className="w-full rounded-md bg-[#276968] text-white text-sm p-3 text-center">
        Login
      </button>
      <div className="text-black text-xs mx-auto">
        Don&apos;t have an account?{" "}
        <span
          className="text-xs text-[#FF6F6B] cursor-pointer"
          onClick={() => {
            setSignup(true);
          }}
        >
          Sign up
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-[40%] p-[0.4px] opacity-30 bg-[#051721]"></div>
        <p className="text-xs text-[#051721] opacity-60">Or login with</p>
        <div className="w-[40%] p-[0.4px] opacity-30 bg-[#051721]"></div>
      </div>
      <div className="w-full flex flex-row justify-between gap-3">
        <button className="border hover:bg-[#276968] border-[#276968] px-4 py-3 w-[30%] flex flex-row justify-center rounded-md">
          <Image src={"/face.png"} width={20} height={20} alt="facebook" />
        </button>
        <button className="border hover:bg-[#276968] border-[#276968] px-4 py-3 w-[30%] flex flex-row justify-center rounded-md">
          <Image src={"/google.png"} width={20} height={20} alt="google" />
        </button>
        <button className="border hover:bg-[#276968] border-[#276968] px-4 py-3 w-[30%] flex flex-row justify-center rounded-md">
          <Image src={"/apple.png"} width={20} height={20} alt="apple" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

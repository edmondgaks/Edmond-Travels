"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

interface SignupFormProps {
  onSignup: (
    email: string,
    password: string,
    fullName: string,
    phoneNumber: string
  ) => void;
}

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfPassword(e.target.value);
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSignup = () => {
    // handle signup logic
  };
  return (
    <div className="w-full bg-[url('/auth.png')] h-screen bg-cover p-10 flex flex-row justify-between items-center">
      <div className="w-[50%] mx-auto">
        <Image
          src={"/logo1.png"}
          width={300}
          height={200}
          alt="Logo for edmond travels"
        />
      </div>
      <form className="bg-white w-[40%] rounded-md p-8 flex flex-col gap-3 justify-center">
        <div className="flex flex-col gap-1 justify-center">
          <h1 className="text-xl font-semibold text-[#051721] tracking-wider">
            Sign up
          </h1>
          <p className="text-[#37454D] text-xs opacity-90">
            Let&apos;s get you all set up so you can access your personal
            account.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs font-medium">Full Name</h1>
          <input
            type="text"
            name="name"
            placeholder="Edmond Gakuba"
            className="p-2 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-xs"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-1 w-[48%]">
            <h1 className="text-xs font-medium">Email</h1>
            <input
              type="email"
              name="email"
              placeholder="edmondgaks@gmail.com"
              className="p-2 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-xs"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-[48%]">
            <h1 className="text-xs font-medium">Phone Number</h1>
            <input
              type="email"
              name="email"
              placeholder="233 034 3456 578"
              className="p-2 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-xs"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
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
        <div className="flex flex-col gap-1">
          <h1 className="text-xs font-medium">Confirm Password</h1>
          <input
            type="password"
            name="password"
            placeholder="•••••••••••••••••"
            className="p-2 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-xs"
            value={confPassword}
            onChange={handleConfPasswordChange}
          />
        </div>
        <div className="flex flex-row w-full gap-2 items-center">
          <input type="checkbox" />
          <p className="text-xs font-medium">
            I agree to all the <span className="text-[#FF6F6B]">Terms</span> and{" "}
            <span className="#FF6F6B">Privacy Policies</span>
          </p>
        </div>
        <button className="w-full rounded-md bg-[#276968] text-white text-sm p-3 text-center cursor-pointer">
          Login
        </button>
        <div className="text-black text-xs mx-auto">
          Already have an account?{" "}
          <Link
            className="text-xs text-[#FF6F6B] cursor-pointer"
            href={"/login"}
          >
            Login
          </Link>
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
    </div>
  );
};

export default Signup;

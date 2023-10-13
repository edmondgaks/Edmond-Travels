"use client";
import React, { useState } from "react";
import Logo from "@/app/components/Logo"
import Image from "next/image"

const Login = () => {
    const [signup, setSignup] = useState(false);
    return (
        <div className="w-full bg-[url('/auth.png')] h-screen bg-cover p-10 flex flex-row justify-between items-center">
            <div className="w-[50%] mx-auto">
                <Image src={"/logo1.png"} width={300} height={200} alt="Logo for edmond travels" />
            </div>
            {!signup && (
                <form className="bg-white w-[40%] rounded-md p-8 flex flex-col gap-4 justify-center">
                    <div className="flex flex-col gap-1 justify-center">
                        <h1 className="text-xl font-semibold text-[#051721] tracking-wider">Login</h1>
                        <p className="text-[#37454D] text-xs opacity-90">Login to access your Phnes.Travels account</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xs font-medium">Email</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="ann.pine@gmail.com"
                            className="p-3 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xs font-medium">Password</h1>
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            className="p-3 rounded-md border-[1px] border-[#9BA2A6]"
                        />
                    </div>
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-xs font-medium">Remember me</p>
                        </div>
                        <p className="text-xs text-[#FF6F6B]">Forgot Password?</p>
                    </div>
                    <button className="w-full rounded-md bg-[#276968] text-white text-sm p-3 text-center">Login</button>
                    <div className="text-black text-xs mx-auto">Don't have an account? <span className="text-xs text-[#FF6F6B]" onClick={() => {setSignup(true)}}>Sign up</span></div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-[40%] p-[0.4px] opacity-30 bg-[#051721]"></div>
                        <p className="text-xs text-[#051721] opacity-60">Or login with</p>
                        <div className="w-[40%] p-[0.4px] opacity-30 bg-[#051721]"></div>
                    </div>
                </form>
            )}
            {signup && (
                <form className="bg-white w-[40%] rounded-md p-8 flex flex-col gap-4 justify-center">
                    <div className="flex flex-col gap-1 justify-center">
                        <h1 className="text-xl font-semibold text-[#051721] tracking-wider">Sign up</h1>
                        <p className="text-[#37454D] text-xs opacity-90">Let's get you all set up so you can access your personal account.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xs font-medium">Full Name</h1>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ann Pine"
                            className="p-3 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xs font-medium">Email</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="ann.pine@gmail.com"
                            className="p-3 rounded-md border-[1px] border-[#9BA2A6] placeholder:text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xs font-medium">Password</h1>
                        <input
                            type="password"
                            name="password"
                            placeholder="•••••••••••••••••"
                            className="p-3 rounded-md border-[1px] border-[#9BA2A6]"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xs font-medium">Confirm Password</h1>
                        <input
                            type="password"
                            name="password"
                            placeholder="•••••••••••••••••"
                            className="p-3 rounded-md border-[1px] border-[#9BA2A6]"
                        />
                    </div>
                    <div className="flex flex-row w-full justify-between items-center">
                        <p className="text-xs font-medium">I agree to all the <span className="text-[#FF6F6B]">Terms</span>  and <span className="#FF6F6B">Privacy Policies</span></p>
                    </div>
                    <button className="w-full rounded-md bg-[#276968] text-white text-sm p-3 text-center">Login</button>
                    <div className="text-black text-xs mx-auto">Don't have an account? <span className="text-xs text-[#FF6F6B]" onClick={() => {setSignup(true)}}>Sign up</span></div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-[40%] p-[0.4px] opacity-30 bg-[#051721]"></div>
                        <p className="text-xs text-[#051721] opacity-60">Or login with</p>
                        <div className="w-[40%] p-[0.4px] opacity-30 bg-[#051721]"></div>
                    </div>
                </form>
            )}
        </div>
    )
}

export default Login
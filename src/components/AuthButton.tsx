"use client";
import React, { useState } from "react";
import { ChevronRight, Cog, CreditCard, Heart, LocateFixed, LogOut, MoveLeft, MoveRight, Settings, User, User2, UserCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { profile } from "console";
const AuthButtons = () => {
    return (
        <div className="flex flex-row justify-center text-white items-center gap-5">
            <Link href="/login" className="font-medium text-xs">Login</Link>
            <Link href="/signup" className="px-3 py-2 rounded bg-white text-[#276968] font-medium text-sm">Sign Up</Link>
        </div>
    )
}
export const UserProfile = () => {
    const [profile, setProfile] = useState(false);
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-3" onClick={() => {setProfile(true)}}>
                <div className="flex flex-row items-center gap-2 border-r-[2px] p-1 border-gray-400">
                    <Heart fill="#051721" size={18} />
                    <div className="text-[#051721] text-xs font-medium">Favourites</div>
                </div>
                <Image src={"/annapie.png"} width={30} height={30} alt="User pic" />
                <p className="text-xs text-[#051721] font-medium">Ann pie</p>
            </div>
            {profile && (
                <div className="absolute top-14 w-[35vh] px-5 py-3 flex rounded-lg flex-col gap-4 z-10 h-[40vh] bg-white shadow-md">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/annapie.png"} width={30} height={30} alt="User pic" />
                        <div className="flex flex-col justify-center">
                            <h1 className="font-medium text-[#051721] text-sm">Ann Pie</h1>
                            <p className="text-gray-400 text-xs">Online</p>
                        </div>
                    </div>
                    <div className="w-full bg-[#A9C3C3] h-[0.5px]"></div>
                    <div className="flex flex-col justify-center gap-3">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <UserCircle size={18} />
                                <h1 className="text-xs font-medium text-[#37454D]">My account</h1>
                            </div>
                            <ChevronRight size={20} />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <CreditCard size={18} />
                                <h1 className="text-xs font-medium text-[#37454D]">Payment</h1>
                            </div>
                            <ChevronRight size={20} />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <Cog size={18} />
                                <h1 className="text-xs font-medium text-[#37454D]">Settings</h1>
                            </div>
                            <ChevronRight size={20} />
                        </div>
                    </div>
                    <div className="w-full bg-[#A9C3C3] h-[0.5px]"></div>
                    <div className="flex flex-col justify-center gap-3">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <LocateFixed size={18} />
                                <h1 className="text-xs font-medium text-[#37454D]">Support</h1>
                            </div>
                            <ChevronRight size={20} />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <LogOut size={18} />
                                <h1 className="text-xs font-medium text-[#37454D]">Logout</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AuthButtons
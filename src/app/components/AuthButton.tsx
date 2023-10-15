"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { profile } from "console";
const AuthButtons = () => {
    return (
        <div className="flex flex-row justify-center text-white items-center gap-5">
            <Link href="/auth" className="font-medium text-xs">Login</Link>
            <Link href="/auth" className="px-3 py-2 rounded bg-white text-[#276968] font-medium text-sm">Sign Up</Link>
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
                    <div className="text-[#051721] text-xs font-semibold">Favourites</div>
                </div>
                <Image src={"/annapie.png"} width={30} height={30} alt="User pic" />
                <p className="text-xs text-[#051721] font-semibold">Ann pie</p>
            </div>
            {profile && (
                <div className="absolute top-14 w-[30vh] h-[10vh] bg-white shadow-md "></div>
            )}
        </div>
    )
}
export default AuthButtons
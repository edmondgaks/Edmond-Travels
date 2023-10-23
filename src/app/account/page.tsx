"use client"
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";


const Account = () => {

    return (
        <div className="w-full h-full">
            <Header />
            <div className="flex flex-col gap-20">
                <div className="relative bg-[url('/accountImage.png')] flex flex-col h-[40vh] bg-cover w-full bg-center">
                    <div className="absolute -bottom-20  flex flex-col items-center justify-center w-full">
                        <Image src={"/ProfilePic.png"} width={100} height={100} alt="profile pic" />
                        <div className="flex flex-col w-full justify-center items-center">
                            <h1 className="font-semibold text-base">Ann Pie</h1>
                            <p className="text-xs text-[#37454D]">anne.pie@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-10">
                    <div className="bg-white shadow-md rounded-md shadow-slate-100 w-full mx-auto y-4 flex flex-row justify-between">
                        <div className={`border-green-500 w-[35%] border-b-4 my-0 flex rounded-sm justify-center place-items-center flex-col py-2 px-4`}>
                            <h1 className="text-[14px]">Account</h1>
                        </div>
                        <div className={`text-center border-r-2 w-[35%] my-4 py-2 min-w-[30vw] px-4 border-slate-200`}>
                            <h1 className="text-[14px]">History</h1>
                        </div>
                        <div className={`border-l-[1px] my-4 py-2 w-[35%] min-w-[30vw] px-4 border-slate-200`}>
                            <h1 className="text-[14px]">Payment methods</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
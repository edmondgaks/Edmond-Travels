"use client";
import Image from "next/image";
import * as React from "react";
import { MdLocationOn } from "react-icons/md";
import { RiCupFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import StarContainer from "@/components/StarContainer";
import { Heart } from "lucide-react";

const WishListOptions = [
    {
        id: "1",
        name: "Atlantis, The Palm",
        location: "Crescent Rd - The Palm Jumeirah - Dubai - United Arab Emirates",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Amazing Hotel",
        reviews: "50 reviews",
        amount: "710",
        imageSrc: "/flight1.png",
    },
    {
        id: "2",
        name: "Sofitel Dubai The Obelisk",
        location: "Sheikh Rashid Rd - Umm Hurair 2 - Dubai - United Arab Emirates",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Amazing Hotel",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/flight2.png",
    },
    {
        id: "3",
        name: "Citymax Hotel Bur Dubai",
        location: "Kuwait Street, Mankhool - Dubai - United Arab Emirates",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Amazing Hotel",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/flight3.png",
    },
    {
        id: "4",
        name: "Five Palm Jumeirah Dubai",
        location: " No. 1 Palm - Dubai - United Arab Emirates",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Amazing Hotel",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/flight4.png",
    },
]



const Flights = () => {
    return (
        <>

            {WishListOptions.map((wishlist) => (
                <div key={wishlist.id} className="flex flex-row w-[98%] shadow-sm mb-5 h-[40vh] bg-white rounded-md">
                    <div className="w-[40%] flex flex-col justify-center">
                        <Image width={200} height={200} src={wishlist.imageSrc} alt="favourites" className="w-[70%] mx-auto" />
                    </div>
                    <div className="flex flex-col p-5 gap-3 relative w-full">
                        <p className="text-lg font-bold w-[50%]">{wishlist.name}</p>
                        <div className="flex flex-row">
                            <MdLocationOn size={16} />  
                            <p className="text-xs font-thin">{wishlist.location}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <StarContainer />
                            <p className="text-xs font-light">5 Stars Hotel</p>
                            <div className="flex flex-row gap-2">
                                <RiCupFill />
                                <p className="text-xs font-light">
                                    {wishlist.aminities}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="border-solid border p-2 rounded-md border-teal-400 text-xs">4.2</div>
                            <p className="text-xs font-semibold p-1">{wishlist.rate}</p>
                            <p className="text-xs font-light p-1">{wishlist.reviews}</p>
                        </div>
                        <div className="flex w-[100%] border border-gray-300"></div>
                        <div className="flex flex-row gap-4">
                            <div className="border-solid border p-3 rounded-md border-teal-400 text-xs">
                                <Heart size={18} />
                            </div>
                            <button className="bg-[#276968] w-[90%] text-white text-sm font-medium rounded-md">Book now</button>
                        </div>
                        <div className="absolute top-0 right-0">
                            <div className="p-8">
                                <p className="text-xs text-neutral-500 font-normal">Starting from</p>
                                <p className="text-orange-500 font-semibold text-2xl">${wishlist.amount} / <span className="text-md">night</span></p>
                                <p className="text-xs text-neutral-500 font-normal">excl. tax</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Flights;
"use client";
import React, { useState } from "react";
import Header from "../components/Header"
import Footer from "../footer/page"
import Houses from "./houses/houses";
import { FaUser } from "react-icons/fa";
import PriceSlider from "../components/Slider";

const aminities = [
    {
        id: "1",
        desc: "24hr front desk"
    },
    {
        id: "2",
        desc: "Air conditioned"
    },
    {
        id: "3",
        desc: "Fitness"
    },
    {
        id: "4",
        desc: "Pool"
    }
]

const freebies = [
    {
        id: "1",
        desc: "Free parking"
    },
    {
        id: "2",
        desc: "Free breakfast"
    },
    {
        id: "3",
        desc: "Free internet"
    },
    {
        id: "4",
        desc: "Free cancellation"
    }
]

const WishListOptions = [
    {
        id: "1",
        images: "9 images",
        name: "CVK Park Bosphorus Hotel Istanbul",
        location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav1.jpeg",
    },
    {
        id: "2",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav2.jpeg",
    },
    {
        id: "3",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav3.jpeg",
    },
    {
        id: "4",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/home5.jpeg",
    },
]

const rates = [
    {
        id: "1",
        rate: "0+",
    },
    {
        id: "2",
        rate: "1+",
    },
    {
        id: "3",
        rate: "2+",
    },
    {
        id: "4",
        rate: "3+",
    },
    {
        id: "5",
        rate: "4+",
    }
]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Hotels = () => {
    const [showModalInfo, setShowModal] = useState<string>("home")
    return (
        <div className="w-full h-full">
            <Header />
            <div className="w-full flex flex-row p-10">
                <div className="flex flex-col p-3 w-[30%] gap-5 bg-[#FAFBFC] h-[110vh]">
                    <div className="text-base p-3 rounded-sm bg-[#051721] text-white  font-semibold">Filters</div>
                    <div className="text-sm font-semibold">Price</div>
                    <PriceSlider />
                    <div className="w-full border border-[#ACACAC] opacity-30"></div>
                    <div className="text-base font-semibold mt-2">Amenities</div>
                    <div className="flex flex-col gap-2 justify-center">
                        {aminities.map((aminity) => (
                            <div key={aminity.id} className="flex flex-row gap-2 items-center">
                                <input type="checkbox" />
                                <div className="text-xs font-medium">{aminity.desc}</div>
                            </div>
                        ))}
                    </div>   
                    <div className="w-full border border-[#ACACAC] opacity-30"></div>

                    <div className="text-base font-semibold mt-2">Freebies</div>
                    <div className="flex flex-col gap-2 justify-center">
                        {freebies.map((freeby) => (
                            <div key={freeby.id} className="flex flex-row gap-2 items-center">
                                <input type="checkbox" />
                                <div className="text-xs font-medium">{freeby.desc}</div>
                            </div>
                        ))}
                    </div>   
                    <div className="text-base font-semibold mt-10">Rating</div>
                    <div className="flex flex-row gap-3">
                        {rates.map((rate) => (
                            <div key={rate.id} id={rate.id} className="border-solid border p-3 rounded-md border-teal-400 text-xs">{rate.rate}</div>
                        ))}
                    </div>
                    <div className="w-full border border-[#ACACAC] opacity-30"></div>
                    
                </div>
                <div className="justify-self-start h-[205vh] mr-4 border border-[#ACACAC] opacity-50"></div>
                <div className="w-[70%] flex flex-col gap-3">
                    <div className="bg-white shadow-md rounded-md shadow-slate-100 w-[98%]  flex justify-center">
                        <div className={`${showModalInfo === 'home' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("home")}>
                            <h1 className='text-sm font-medium'>Houses</h1>
                            <p className='text-xs text-gray-500 text-thin'>250+ places</p>
                        </div>
                        <div className={`${showModalInfo === 'villas' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("villas")}>
                            <h1 className='text-sm font-medium'>Villas</h1>
                            <p className='text-xs text-gray-500 text-thin'>56+ places</p>
                        </div>
                        <div className={`${showModalInfo === 'resorts' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("resorts")}>
                            <h1 className='text-sm font-medium'>Resorts</h1>
                            <p className='text-xs text-gray-500 text-thin'>86+ places</p>
                        </div>
                        <div className={`${showModalInfo === 'appartments' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("appartments")}>
                            <h1 className='text-sm font-medium'>Appartments</h1>
                            <p className='text-xs text-gray-500 text-thin'>125+ places</p>
                        </div>
                    </div>
                    {showModalInfo === "home" && 
                     <Houses />
                    }
                    {showModalInfo === "villas" && 
                     <Houses />
                    }
                    {showModalInfo === "resorts" && 
                     <Houses />
                    }
                    {showModalInfo === "appartments" && 
                     <Houses />
                    }
                <button className="bg-black text-white w-[95%] font-medium rounded-md p-3">Show more results</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Hotels
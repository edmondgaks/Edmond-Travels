"use client";
import React, { useState } from "react";
import Header from "@/components/Header"
import Footer from "@/components/footer"
import Flights from "./flights/flights";
import { FaUser } from "react-icons/fa";
import PriceSlider from "@/components/Slider";

const trips = [
    {
        id: "1",
        desc: "Round Trip"
    },
    {
        id: "2",
        desc: "One-way"
    },
    {
        id: "3",
        desc: "Multi-City"
    },
    {
        id: "4",
        desc: "Flexible dates"
    }
]

const airlines = [
    {
        id: "1",
        desc: "Ghana Airways"
    },
    {
        id: "2",
        desc: "British Midland Airways Linited"
    },
    {
        id: "3",
        desc: "United Airlines"
    },
    {
        id: "4",
        desc: "Delta Airlines"
    }
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

const BookFlights = () => {
    const [showModalInfo, setShowModal] = useState<string>("cheapest")
    return (
        <div className="w-full h-full">
            <Header />
            <div className="w-full flex flex-row p-10 gap-6">
                <div className="flex flex-col p-3 w-[30%] gap-5 bg-[#FAFBFC] h-[110vh]">
                    <div className="text-base p-3 rounded-sm bg-[#051721] text-white  font-semibold">Filters</div>
                    <div className="text-sm font-semibold">Price Range</div>
                    <PriceSlider />
                    <div className="text-sm font-semibold">Departure Time</div>
                    <PriceSlider />
                    <div className="w-full border border-[#ACACAC] opacity-30"></div>
                    <div className="text-base font-semibold mt-2">Trips</div>
                    <div className="flex flex-col gap-2 justify-center">
                        {trips.map((trip) => (
                            <div key={trip.id} className="flex flex-row gap-2 items-center">
                                <input type="checkbox" />
                                <div className="text-xs font-medium">{trip.desc}</div>
                            </div>
                        ))}
                    </div>   
                    <div className="w-full border border-[#ACACAC] opacity-30"></div>

                    <div className="text-base font-semibold mt-2">Airlines</div>
                    <div className="flex flex-col gap-2 justify-center">
                        {airlines.map((airline) => (
                            <div key={airline.id} className="flex flex-row gap-2 items-center">
                                <input type="checkbox" />
                                <div className="text-xs font-medium">{airline.desc}</div>
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
                {/* <div className="justify-self-start h-[205vh] mr-4 border border-[#ACACAC] opacity-50"></div> */}
                <div className="w-[70%] flex flex-col gap-3">
                    <div className="bg-white shadow-md rounded-md shadow-slate-100 w-[98%]  flex justify-between">
                        <div className={`${showModalInfo === 'cheapest' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("cheapest")}>
                            <h1 className='text-sm font-semibold'>Cheapest</h1>
                            <p className='text-xs text-gray-500 text-thin'>250+ places</p>
                        </div>
                        <div className={`${showModalInfo === 'best' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("best")}>
                            <h1 className='text-sm font-semibold'>Best</h1>
                            <p className='text-xs text-gray-500 text-thin'>56+ places</p>
                        </div>
                        <div className={`${showModalInfo === 'quickest' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("quickest")}>
                            <h1 className='text-sm font-semibold'>Quickest</h1>
                            <p className='text-xs text-gray-500 text-thin'>86+ places</p>
                        </div>
                        <div className={`${showModalInfo === 'other' ? 'border-green-500 border-b-4 w-[25%] py-2 px-4' : 'py-2 w-[25%] px-4'}`} onClick={() => setShowModal("other")}>
                            <h1 className='text-sm font-semibold'>Other sorts   </h1>
                            <p className='text-xs text-gray-500 text-thin'>86+ places</p>
                        </div>
                    </div>
                    {showModalInfo === "cheapest" && 
                     <Flights />
                    }
                    {showModalInfo === "best" && 
                     <Flights />
                    }
                    {showModalInfo === "quickest" && 
                     <Flights />
                    }
                    {showModalInfo === "other" && 
                     <Flights />
                    }
                <button className="bg-black text-white w-[95%] font-medium rounded-md p-3">Show more results</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default BookFlights
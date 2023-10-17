"use client";
import Header from "../components/Header"
import { MapPin, UserCircle2, Calendar, Navigation, Search } from "lucide-react"
import Footer from "../footer/page"
import Image from "next/image";
import Link from "next/link";
const Hotels = () => {
    return (
        <div className="w-full h-full">
            <Header />
            <div className="bg-[url('/hotel-image.png')] flex flex-col justify-center items-center w-full bg-center h-[70vh] bg-cover">
                <div className="w-[40%] h-full text-white flex flex-col items-center justify-center gap-4">
                    <div className="font-semibold text-3xl text-center text-[#FCFCFC]">Create your travel wish list and leave the rest for us.</div>
                    <div className="font-medium text-base opacity-90">Special offers to suit your plan.</div>
                </div>  
                <div className="bg-white p-3 w-[60%] flex flex-row items-center justify-evenly text-xs gap-3 text-[#37454D] rounded-md absolute inset-x-0 bottom-40 mx-auto">
                    <div className="flex flex-row items-center w-[20%] gap-2">
                        <MapPin size={20} />
                        {/* <p>From</p> */}
                        <input type="text" className="w-[80%] p-3 text-xs placeholder:text-[#37454D]" placeholder="From" />
                    </div>
                    <div className="h-8 w-[2px] bg-[#37454D]"></div>
                    <div className="flex flex-row w-[20%] items-center gap-2">
                        <Navigation size={20} />
                        <input type="text" className="w-[80%] p-3 text-xs placeholder:text-[#37454D]" placeholder="To" />
                    </div>
                    <div className="h-8 w-[2px] bg-[#37454D]"></div>
                    <div className="flex flex-row w-[20%] items-center gap-2">
                        <Calendar size={20} />
                        <input type="text" className="w-[80%] p-3 text-xs placeholder:text-[#37454D]" placeholder="Date" />
                    </div>
                    <div className="h-8 w-[2px] bg-[#37454D]"></div>
                    <div className="flex flex-row w-[30%] items-center gap-2">
                        <UserCircle2 size={20} />
                        <input type="text" className="w-[80%] p-3 border-none text-xs placeholder:text-[#37454D]" placeholder="Traveler - Class" />
                    </div>
                    <div className="h-8 w-[2px] bg-[#37454D]"></div>
                    <button className="w-[25%] rounded-md bg-[#276968] text-white p-3 flex flex-row justify-center items-center gap-3">
                        <p>Find Trip now</p>
                        <Search />
                    </button>
                </div>
            </div>
            <div className="p-10 flex flex-col gap-10 w-full">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-center gap-1">
                        <p className="text-[#276968] text-sm font-semibold">Top Destinations</p>
                        <p className="text-[#051721] font-semibold text-xl">Discover your love</p>
                    </div>
                    <button className="border border-[#276968] rounded-md text-[#276968] hover:bg-[#276968] hover:text-white text-sm px-5 py-3">See all</button>
                </div>
                <div className="grid w-full grid-cols-4 gap-6">
                    <div className="bg-[url('/paris.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Paris</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$600</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                    <div className="bg-[url('/bora.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Bora Bora</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$1500</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                    <div className="bg-[url('/london.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">London</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$350</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                    <div className="bg-[url('/tohiti.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Tahiti</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$300</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                    <div className="bg-[url('/rome.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Rome</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$200</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                    <div className="bg-[url('/dubai.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Dubai</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$200</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                    <div className="bg-[url('/bali.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Bali</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$850</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                    <div className="bg-[url('/lucia.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">St Lucia</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$446</h1>
                        </div>
                        <button className="bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">Book Flight</button>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-center gap-1">
                        <p className="text-[#276968] text-sm font-semibold">Top Hotels</p>
                        <p className="text-[#051721] font-semibold text-xl">Discover your love</p>
                    </div>
                    <Link href="/hotelsInfo" className="border border-[#276968] rounded-md text-[#276968] hover:bg-[#276968] hover:text-white text-sm px-5 py-3">See all</Link>
                </div>
                <div className="w-full flex flex-row justify-evenly items-center h-[50vh] gap-4">
                    <div className="w-[40%] bg-[#276968] h-full flex flex-col justify-between px-6 py-4 rounded-lg">
                        <div className="flex flex-col gap-6 justify-center">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-3xl w-[60%] font-semibold text-white">Discover the best hotel in Greece</h1>
                                <div className="bg-white p-1 h-[60%] text-center rounded-md  text-xs">From <span className="text-[#276968] text-sm">$600</span></div>
                            </div>
                            <p className="font-thin text-xs text-white opacity-70">Adventure cruising is more than a growing trend to connect with nature, wildlife, and yourself. It's a community of adventurers that is here to stay. With luxurious accommodations and unmatched scenery, our Baja kayaking is the perfect escape.</p>
                        </div>
                        <button className="w-full rounded-md p-2 text-center text-[#276968] bg-white">
                            Book hotel
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <Image src={"/place1.png"} width={260} height={260} alt="places" />
                        <Image src={"/place2.png"} width={260} height={260} alt="places" />
                        <Image src={"/place3.png"} width={260} height={260} alt="places" />
                        <Image src={"/place4.png"} width={260} height={260} alt="places" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hotels
"use client";
import Header from "@/components/Header"
import { MapPin, UserCircle2, Calendar, Navigation, Search } from "lucide-react"
import Footer from "@/components/footer";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { redirect } from "next/navigation";
// import { Link } from "next13-progressbar";
import Link from "next/link";
const Flights = () => {
    return (
        <div className="w-full h-full">
            <Header />
            <div className="bg-[url('/flightImage.png')] p-10 flex flex-col items-center justify-between  w-full bg-center h-[70vh] bg-cover">
                <div className="w-[40%] h-full text-white flex flex-col items-center justify-center gap-4">
                    <div className="font-semibold text-3xl text-center text-[#FCFCFC]">Create your travel wish list and leave the rest for us.</div>
                    <div className="font-medium text-base opacity-90">Special offers to suit your plan.</div>
                </div>  
                <SearchBar />
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
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                    <div className="bg-[url('/bora.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Bora Bora</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$1500</h1>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                    <div className="bg-[url('/london.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">London</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$350</h1>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                    <div className="bg-[url('/tohiti.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Tahiti</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$300</h1>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                    <div className="bg-[url('/rome.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Rome</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$200</h1>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                    <div className="bg-[url('/dubai.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Dubai</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$200</h1>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                    <div className="bg-[url('/bali.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">Bali</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$850</h1>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                    <div className="bg-[url('/lucia.png')] h-[60vh] gap-3 flex flex-col justify-end p-6 bg-cover bg-center rounded-lg">
                        <div className="flex flex-row text-white items-center justify-between">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm font-semibold">St Lucia</h1>
                                <p className="text-xs font-light opacity-80">An amazing Adventure</p>
                            </div>
                            <h1 className="text-base font-semibold">$446</h1>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-center gap-1">
                        <p className="text-[#276968] text-sm font-semibold">Top Hotels</p>
                        <p className="text-[#051721] font-semibold text-xl">Discover your love</p>
                    </div>
                    <button className="border border-[#276968] rounded-md text-[#276968] hover:bg-[#276968] hover:text-white text-sm px-5 py-3">See all</button>
                </div>
                <div className="w-full flex flex-row justify-evenly items-center h-[50vh] gap-4">
                    <div className="w-[40%] bg-[#276968] h-full flex flex-col justify-between px-6 py-4 rounded-lg">
                        <div className="flex flex-col gap-6 justify-center">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-3xl w-[60%] font-semibold text-white">Kayaking in Baja California</h1>
                                <div className="bg-white p-1 h-[60%] text-center rounded-md  text-xs">From <span className="text-[#276968] text-sm">$600</span></div>
                            </div>
                            <p className="font-thin text-xs text-white opacity-70">Adventure cruising is more than a growing trend to connect with nature, wildlife, and yourself. It&apos;s a community of adventurers that is here to stay. With luxurious accommodations and unmatched scenery, our Baja kayaking is the perfect escape.</p>
                        </div>
                        <Link href={"/book-flight"} className="w-full bg-white rounded-md p-3 hover:text-white hover:bg-[#276968] text-xs text-[#276968] text-center">
                            Book Flight
                        </Link>
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

export default Flights
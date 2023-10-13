import { MapPin, Navigation } from "lucide-react"
import Image from "next/image"

const Discover = () => {
    return (
        <div className="p-10 flex flex-col gap-4 w-full">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-col justify-center gap-1">
                    <p className="text-[#276968] text-sm font-semibold">Top Destinations</p>
                    <p className="text-[#051721] font-semibold text-xl">Discover your love</p>
                </div>
                <button className="border border-[#276968] rounded-md text-[#276968] hover:bg-[#276968] hover:text-white text-sm px-5 py-3">See all</button>
            </div>
            <div className="w-full mb-10 flex flex-row gap-3 items-center justify-between">
                <div className="flex flex-col gap-2 p-3 rounded-lg shadow-lg bg-[#FAFBFC]">
                    <Image src={"/discover1.png"} width={400} height={400} alt="thailand" className="" />
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-col gap-1 justify-center">
                            <h1 className="text-[#276968] text-xl font-semibold">Phuket</h1>
                            <div className="flex flex-row gap-1 items-center">
                                <MapPin size={14} color="#69747A" />
                                <p className="text-[#69747A] text-xs">Thailand</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-3 rounded-lg shadow-lg bg-[#FAFBFC]">
                    <Image src={"/discover2.png"} width={400} height={400} alt="thailand" className="" />
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-col gap-1 justify-center">
                            <h1 className="text-[#276968] text-xl font-semibold">Santarin</h1>
                            <div className="flex flex-row gap-1 items-center">
                                <MapPin size={14} color="#69747A" />
                                <p className="text-[#69747A] text-xs">Greece</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-3 rounded-lg shadow-lg bg-[#FAFBFC]">
                    <Image src={"/discover2.png"} width={400} height={400} alt="thailand" className="" />
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-col gap-1 justify-center">
                            <h1 className="text-[#276968] text-xl font-semibold">Paris </h1>
                            <div className="flex flex-row gap-1 items-center">
                                <MapPin size={14} color="#69747A" />
                                <p className="text-[#69747A] text-xs">France</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-evenly">
                <div className="w-[35%] bg-[url('/flights.png')] rounded-lg bg-cover h-[65vh] p-10">
                    <div className="w-[80%] mx-auto h-full  flex gap-2 flex-col justify-end items-center">
                        <h1 className="text-2xl font-semibold text-white">Flights</h1>
                        <p className="text-white text-sm text-center opacity-90 text-medium">Search flights & places and book for your amazing trips.</p>
                        <div className="w-[50%] justify-center rounded-sm bg-white flex flex-row px-2 py-3 gap-2 items-center">
                            <Navigation stroke="#276968" size={20} />
                            <p className="text-[#276968] text-sm font-semibold ">Show Flights</p>
                        </div>
                    </div>
                </div>
                <div className="w-[35%] bg-[url('/hotels.png')] rounded-lg bg-cover h-[65vh] p-10">
                    <div className="w-[80%] mx-auto h-full flex gap-2 flex-col justify-end items-center">
                        <h1 className="text-2xl font-semibold text-white">Hotels</h1>
                        <p className="text-white text-sm text-center opacity-90 text-medium">Search our best hotels & places and book for your  amazing trips..</p>
                        <div className="w-[50%] justify-center rounded-sm bg-white flex flex-row px-2 py-3 gap-2 items-center">
                            <Navigation stroke="#276968" size={20} />
                            <p className="text-[#276968] text-sm font-semibold ">Show Hotels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover
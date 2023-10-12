import { MapPin } from "lucide-react"
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
            <div className="w-full flex flex-row gap-3 items-center justify-between">
                <div className="w-[30%] flex flex-col gap-2 p-3 rounded-lg shadow-lg bg-[#FAFBFC]">
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
                <div className="w-[30%] flex flex-col gap-2 p-3 rounded-lg shadow-lg bg-[#FAFBFC]">
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
                <div className="w-[30%] flex flex-col gap-2 p-3 rounded-lg shadow-lg bg-[#FAFBFC]">
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
            </div>
        </div>
    )
}

export default Discover
import { MapPin, UserCircle2, Calendar, Navigation, Search } from "lucide-react"
import AuthButtons from "@/components/AuthButton"
import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"

const Landing = () => {
    return (
        <div className="p-3">
            <div className="bg-[url('/landing-page.png')] w-full bg-fixed bg-cover rounded-md h-[96vh] box-border">
                <div className="mx-auto flex flex-row items-center  justify-around py-5">
                    <Logo />
                    <Navbar />
                    <AuthButtons />
                </div>
                <div className="w-full h-[80%] text-white flex flex-col items-center justify-center gap-4">
                    <div className="font-semibold text-4xl text-[#FCFCFC]">Don&apos;t call it a dream. Call it a plan</div>
                    <div className="font-medium text-md opacity-90">Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace.</div>
                </div>
                <div className="bg-white p-3 w-[60%] flex flex-row items-center justify-evenly text-xs gap-3 text-[#37454D] rounded-md absolute inset-x-0 bottom-20 mx-auto">
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
        </div>
    )
}


export default Landing
"use client";
import { MapPin, UserCircle2, Calendar, Navigation, Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="bg-white p-3 w-[60%] flex flex-row items-center justify-evenly text-xs gap-3 -translate-y-10 text-[#37454D] rounded-md mx-auto">
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
    )
}

export default SearchBar
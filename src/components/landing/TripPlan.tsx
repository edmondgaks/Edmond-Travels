import Image from "next/image"

const TripPlan = () => {
    return (
        <div className="w-full flex flex-row p-10 items-center justify-center">
            {/* <div className="w-[50%] flex flex-row "> */}
                <Image src={"/Rectangle 8.png"} alt="Image 1 trip" width={200} height={200} className="z-0" />
                <Image src={"/Rectangle 10.png"} alt="Image 2 trip" width={180} height={180} className="z-10 -translate-x-10 translate-y-4" />
                <Image src={"/Rectangle 9.png"} alt="Image 3 trip" width={120} height={120} className="z-20 -translate-x-20 -translate-y-10" />
            {/* </div> */}
            <div className="flex flex-col gap-2 w-[50%] justify-center">
                <p className="text-xs text-[#276968] font-semibold">About</p>
                <h1 className="text-xl text-[#051721] font-semibold">Plan your perfect trip</h1>
                <p className="text-xs text-[#37454D] w-[70%]">Are you looking for an adventurous travel, or just carrying your work alongside you while you travel and explore new places, then your perfect trip is one with us, Phnes travels help you search flights & places, book your most convenient hotels/places at your comfort while we help you discover the world. Welcome to a new dispensation.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-lg font-bold text-[#276968] gap-1">150+</h1>
                        <p className="text-xs text-[#37454D]">Flight Destinations</p>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h1 className="text-lg font-bold text-[#276968]">250+</h1>
                        <p className="text-xs text-[#37454D]">Hotels</p>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h1 className="text-lg font-bold text-[#276968]">80</h1>
                        <p className="text-xs text-[#37454D]">Elite Transportation</p>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h1 className="text-lg font-bold text-[#276968]">40+</h1>
                        <p className="text-xs text-[#37454D]">We help to find your dream place</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripPlan
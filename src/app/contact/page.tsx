import { LogoBlack } from "@/components/Logo"
import { NavbarAuth } from "@/components/Navbar"
import Image from "next/image"

const Contact = () => {
    return (
        <div className="w-full bg-[url('/contact-us.png')] h-screen bg-cover flex flex-col justify-center items-center">
            <div className="p-10 w-[55%] bg-white rounded-lg shadow-md flex flex-col justify-between gap-4">
                <div className="w-full flex flex-row items-center justify-between">
                    <LogoBlack />
                    <NavbarAuth />
                </div>
                <div className="flex flex-row justify-around w-full">
                    <div className="flex flex-col w-[50%] justify-center gap-4">
                        <div className="flex flex-col w-full justify-center">
                            <h1 className="font-bold text-lg">Get in touch</h1>
                            <p className="text-[#37454D] text-xs">We are here for you! How can we help?</p>
                        </div>
                        <div className="flex w-full flex-col justify-center gap-4">
                            <input type="text" placeholder="Enter your name" className="p-3 rounded-md w-full bg-[#E9F0F0] placeholder:text-[#051721] placeholder:text-xs" />
                            <input type="email" placeholder="Enter your email" className="p-3 rounded-md bg-[#E9F0F0] placeholder:text-[#051721] placeholder:text-xs" />
                            <textarea placeholder="Go ahead, we're listening!!!" className="p-3 rounded-md bg-[#E9F0F0] placeholder:text-[#051721] placeholder:text-xs"></textarea>
                            <button className="py-2 text-white w-[30%] rounded-sm bg-[#276968] text-xs">Submit</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={"/banner-contact.png"} width={200} height={200} alt="banner contact" />
                        <div className="flex flex-row items-center gap-4">
                            <Image src={"/location.png"} width={30} height={10} alt="location" />
                            <h1 className="text-[#37454D] text-sm">205A Millennium City, Accra</h1>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Image src={"/phone.png"} width={30} height={10} alt="location" />
                            <h1 className="text-[#37454D] text-sm">233 - 8586 - 689</h1>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Image src={"/message.png"} width={30} height={10} alt="location" />
                            <h1 className="text-[#37454D] text-sm">phnes.travels@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
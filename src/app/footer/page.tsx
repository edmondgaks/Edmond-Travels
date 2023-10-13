import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Logo from "../components/Logo"

const Footer = () => {
    return (
        <div className="w-full bg-[#276968] mt-4 text-white h-[38vh] flex flex-row items-center px-10 py-14 justify-around">
            <div className="flex flex-col justify-between gap-3">
                <Logo />
                <div className="flex flex-row items-center gap-1">
                    <Facebook size={20} stroke="#fff" />
                    <Twitter size={20} stroke="#fff" />
                    <Youtube size={20} stroke="#fff" />
                    <Instagram size={20} stroke="#fff" />
                </div>
            </div>
            <div className="flex flex-col justify-between self-start gap-2">
                <h1 className="text-base">Links</h1>
                <p className="text-xs font-light opacity-70">Flights</p>
                <p className="text-xs font-light opacity-70">Stays</p>
                <p className="text-xs font-light opacity-70">Discover</p>
                <p className="text-xs font-light opacity-70">About us</p>
                <p className="text-xs font-light opacity-70">Contact</p>
            </div>
            <div className="flex flex-col justify-between self-start gap-2">
                <h1 className="text-base">Our Activities</h1>
                <p className="text-xs font-light opacity-70">Tour</p>
                <p className="text-xs font-light opacity-70">Kayaking</p>
                <p className="text-xs font-light opacity-70">Cruising & Sailing</p>
                <p className="text-xs font-light opacity-70">Multi-Activities </p>
            </div>
            <div className="flex flex-col justify-between self-start gap-2">
                <h1 className="text-base">About us</h1>
                <p className="text-xs font-light opacity-70">Our story</p>
                <p className="text-xs font-light opacity-70">Work with us</p>
            </div>
            <div className="flex flex-col justify-between self-start gap-2">
                <h1 className="text-base">Contact </h1>
                <p className="text-xs font-light opacity-70">Address: Pe.Holandia No.205A</p>
                <p className="text-xs font-light opacity-70">Millennium City,  PH17</p>
                <p className="text-xs font-light opacity-70">Phone: 023 456 7890</p>
                <p className="text-xs font-light opacity-70">Email: phnes.travels@gmail.com</p>
                <p className="text-xs font-light opacity-70">Maps: Millennium City, Accra</p>
            </div>
        </div>
    )
}

export default Footer
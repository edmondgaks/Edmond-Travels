import Image from "next/image"
import  { UserProfile } from "./AuthButton"
import { LogoBlack } from "./Logo"
import { NavbarAuth } from "./Navbar"

const Header = () => {
    return (
        <div className="mx-auto flex flex-row items-center justify-around py-3">
            <LogoBlack />
            <NavbarAuth />
            <UserProfile />
        </div>
    )
}

export default Header
"use client";
import Image from "next/image"
import { Link } from "next13-progressbar"

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src={"/logo.png"} width={160} height={160} alt="Logo for edmond travels" />
        </Link>
    )
}

export const LogoBlack = () => {
    return (
        <Link href={"/"}>
            <Image src={"/logo-black.png"} width={160} height={160} alt="Logo for edmond travels" />
        </Link>
    )
}

export default Logo
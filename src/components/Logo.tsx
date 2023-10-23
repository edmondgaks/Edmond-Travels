import Image from "next/image"

const Logo = () => {
    return (
        <Image src={"/logo.png"} width={160} height={160} alt="Logo for edmond travels" />
    )
}

export const LogoBlack = () => {
    return (
        <Image src={"/logo-black.png"} width={160} height={160} alt="Logo for edmond travels" />
    )
}

export default Logo
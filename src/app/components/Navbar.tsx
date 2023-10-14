import Link from "next/link";

const Navbar = () => {
    return (
        <div className="md:flex md:items-center text-white text-xs font-medium  md:justify-center hidden gap-10 text-sm">
            <Link href="/" className="">Home</Link>
            <Link href="/flights" className="">Flights</Link>
            <Link href="/hotels" className="">Hotels</Link>
            <Link href="/discover" className="">Discover</Link>
            <Link href="/about-us" className="">About us</Link>
            <Link href="/contact" className="">Contact</Link>
        </div>
    )
}

export const NavbarAuth = () => {
    return (
        <div className="md:flex md:items-center text-black text-xs font-medium  md:justify-center hidden gap-10 text-sm">
            <Link href="/" className="">Home</Link>
            <Link href="/flights" className="">Flights</Link>
            <Link href="/hotels" className="">Hotels</Link>
            <Link href="/discover" className="">Discover</Link>
            <Link href="/about-us" className="">About us</Link>
            <Link href="/contact" className="">Contact</Link>
        </div>
    )

}
export default Navbar
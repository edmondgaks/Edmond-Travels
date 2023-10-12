import Link from "next/link"
const AuthButtons = () => {
    return (
        <div className="flex flex-row justify-center text-white items-center gap-5">
            <Link href="/login" className="font-medium text-xs">Login</Link>
            <Link href="/signup" className="px-3 py-2 rounded bg-white text-[#276968] font-medium text-sm">Sign Up</Link>
        </div>
    )
}
export default AuthButtons
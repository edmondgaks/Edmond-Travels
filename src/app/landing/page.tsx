import AuthButtons from "../components/AuthButton"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"

const Landing = () => {
    return (
        <div className="p-3">
            <div className="bg-[url('/landing-image.jpeg')] w-full bg-fixed bg-cover rounded-md h-[96vh] box-border">
                <div className="container-gradient rounded-md relative">
                    <div className="mx-auto flex flex-row items-center  justify-around py-5">
                        <Logo />
                        <Navbar />
                        <AuthButtons />
                    </div>
                    <div className="w-full h-[80%] text-white flex flex-col items-center justify-center gap-4">
                        <div className="font-semibold text-4xl">Don't call it a dream. Call it a plan</div>
                        <div className="font-medium text-md opacity-90">Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace.</div>
                    </div>
                    <div className="bg-white p-4 w-[50%] absolute inset-x-0 bottom-40 mx-auto"></div>
                </div>
            </div>
        </div>
    )
}


export default Landing
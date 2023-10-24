import Header from "@/components/Header"
import Footer from "@/components/footer"
import { CaseIcon, HeadPhonesIcon, TrackIcon, WorldIcon } from "@/components/icons"
import Image from "next/image"
const AboutUs = () => {
    return (
        <div className="w-full h-full">
            <Header />
            <div className="bg-[url('/aboutImage.png')] w-full bg-center bg-no-repeat bg-cover h-[60vh]"></div>
            <div className="flex flex-col gap-10 py-10 px-4">
                <div className="flex flex-row justify-center items-start gap-4 w-full">
                    <div className="flex flex-col gap-8 w-[55%] justify-center">
                        <h1 className="font-semibold text-base">About Phnes. Travels</h1>
                        <p className="text-[#37454D] font-light text-sm">Since 1975, Phnes. Travels has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world&apos;s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.</p>
                        <p className="text-[#37454D] font-light text-sm">We&apos;re a worker-claimed travel organization secured by our qualities, trustworthiness, and commitment to client benefit.
    Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, an overall association enabling us to give our clients unmatched advantages.</p>
                        <p className="text-[#37454D] font-light text-sm">Since 2009, our solid organizational culture and enthusiasm for our calling have brought about our being named every year as one of the “Best Places To Work” in Accra Ghana. Our administration is dynamic on different tourism warning sheets and panels for movement associations. Fulfilled workers lead to fulfilled clients. We know the development and accomplishment of our organization relies on satisfying our customer&apos; needs each day. That is additionally our guarantee.</p>
                    </div>
                    <Image src={"/aboutImg.png"} className="w-[35%]" width={300} height={300} alt="About us image" />
                </div>
                <div className="flex flex-col justify-center gap-6 items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-xl font-semibold">Why choose us?</h1>
                        <p className="text-xs">These popular destinations have a lot to offer</p>
                    </div>
                    <div className="flex flex-row w-full justify-center gap-10">
                        <div className="flex flex-col justify-center">
                            <CaseIcon />
                            <p className="text-sm w-[80%]">Provide hassle free travel at affordable price</p>
                        </div>
                        <div className="flex flex-col">
                            <TrackIcon />
                            <p className="text-sm w-[80%]">Easy booking and comfortable travel.</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <WorldIcon />
                            <p className="text-sm w-[60%] text-center">Offers great cuisines & experience unique cultures.</p>
                        </div>
                        <div className="flex flex-col">
                            <HeadPhonesIcon />
                            <p className="text-sm">Customer Service 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
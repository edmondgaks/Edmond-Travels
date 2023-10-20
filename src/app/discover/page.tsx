import { MapPin, Navigation } from "lucide-react"
import Image from "next/image"
import Header from "../components/Header"

const Discover = () => {
    return (
        <div className="w-full h-full">
            <Header />
            <div className="bg-[url('/discoverImage.png')]  w-full bg-center h-[60vh] bg-cover"></div>
            <div className="flex flex-row  gap-4 w-full p-10">
                <div className="w-[55%] flex flex-col gap-8 justify-center">
                    <h1 className="text-lg font-semibold">South Island</h1>
                    <p className="text-sm font-light">The South Island of New Zealand is renowned for its mountains, lakes and glaciers. The Southern Alps, home to 3,724m-high Aoraki Mt. Cook, run along the entire length of the island. In the southwest is Fiordland National Park, with steep-sided Milford Sound.</p>
                    <p className="text-sm">In the north is Abel Tasman National Park, known for its trails and ocean kayaking. Queenstown is famed for adventure sports like bungee jumping and skiing.</p>
                    <Image src={"/discovering1.png"} width={500} className="w-full" height={500} alt="Discovering places" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-lg font-semibold">Natural geographic features</h1>
                        <div className="flex flex-row gap-2 items-center">
                            <MapPin size={18} fill="#FF6F6B" stroke="#FF6F6B" />
                            <p className="text-sm font-medium text-gray-500">New Zealand </p>
                        </div>
                    </div>
                    <p className="text-sm font-light">The South Island has 15 named maritime fiords which are all located in the southwest of the island in a mountainous area known as Fiordland. The spelling 'fiord' is used in New Zealand rather than 'fjord', although all the maritime fiords use the word Sound in their name instead.</p>
                    <p className="font-light text-sm">A number of lakes in the Fiordland and Otago regions also fill glacial valleys. Lake Te Anau has three western arms which are fiords (and are named so). Lake McKerrow / Whakatipu Waitai to the north of Milford Sound / Piopiotahi is a fiord with a silted-up mouth. Lake Wakatipu fills a large glacial valley, as do lakes Hakapoua, Poteriteri, Monowai and Hauroko in the far south of Fiordland. Lake Manapouri has fiords as its west, north and south arms..</p>
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={"/discovering2.png"} width={300} className="w-full" height={300} alt="Discovering places" />
                        <Image src={"/discovering3.png"} width={300} className="w-full" height={300} alt="Discovering places" />
                    </div>
                    <p className="font-light text-sm">Most of New Zealand's glaciers are in the South Island. They are generally found in the Southern Alps near the Main Divide.</p>
                    <p className="font-light text-sm">An inventory of South Island glaciers during the 1980s indicated there were about 3,155 glaciers with an area of at least one hectare (2.5 acres).[60] About a sixth of these glaciers covered more than 10 hectares. These include the Fox and Franz Josef glaciers on the West Coast, and the Haupapa / Tasman, Hooker, Mueller and Murchison glaciers in the east.</p>
                </div>
                <div className="w-[40%]"></div>
            </div>
        </div>
    )
}

export default Discover
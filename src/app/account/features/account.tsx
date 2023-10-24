import { EditIcon } from "@/components/icons";

interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    phone_number: number;
    dob: string;
    [key: string]: any;
}

const IUserImpl: IUser = {
    name: "Edmond Gakuba",
    email: "edmondgaks@gmail.com",
    password: "edmond12345",
    phone_number: 790077242,
    dob: "19/06/2006"
}

const AccountInfoData = ({ value, label }: { label: any, value: any }) => {
    return (
        <div className="flex justify-between py-2 place-items-center">
            <div>
                <label className="text-[12px] text-slate-500">{label}</label>
                <h1 className="text-black text-[16px]">{value}</h1>
            </div>
            <div>
                <button className="bg-white border-[#276968] text-black px-5 text-sm rounded-md  duration-300 flex justify-center gap-2 py-3 border-2">
                    <EditIcon />
                    <span className="text-[12px]">Change</span>
                </button>
            </div>
        </div>
    )
}

const AccountInfo = () => {
    const displayInfo = () => {
        const keys = Object.keys(IUserImpl);
        const infoData = keys.map((key) => <AccountInfoData key={key} label={key} value={IUserImpl[key]} />);
        return infoData;
    }
    return (
        <div className="text-black w-full">
            <div className="flex justify-between py-8 place-items-center px-10">
                <h1 className="text-xl font-medium">Account</h1>
            </div>
            <div className="bg-[#FAFBFC] px-10 rounded-sm shadow-md py-4 shadow-slate-200">
                {displayInfo()}
            </div>
        </div>
    )
}

export default AccountInfo
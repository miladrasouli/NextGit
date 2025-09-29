import { InputCompType } from "@/schema/types";
import { BiSearch } from "react-icons/bi";


const Input = (props: InputCompType) => {
    return (
        <div className="flex flex-col gap-2">
            {props.label && <>
                <label htmlFor={props.id}>{props.label}
                    {props.required && <span className="text-red-500 mx-1">
                        *
                    </span>}
                </label>
            </>}
            <div className="w-full flex ">
                <input type={props.type} placeholder={props.placeholder} className={`outline-0 border border-gray-300 rounded-r px-3 ${props.className}`} />
                {props.hasSearch && <button className="bg-gray-700 rounded-l-sm p-2 text-white">
                    <BiSearch size={20} />
                </button>}
            </div>
        </div>
    )
}

export default Input;
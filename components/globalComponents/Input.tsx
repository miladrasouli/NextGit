"use client"
import { InputCompType } from "@/schema/types";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsEye } from "react-icons/bs";


const Input = (props: InputCompType) => {
    const [inputType, setInputType] = useState(props.type)
    return (
        <div className="w-full flex flex-col gap-2">
            {props.label && <>
                <label htmlFor={props.id}>{props.label}
                    {props.required && <span className="text-red-500 mx-1">
                        *
                    </span>}
                </label>
            </>}
            <div className="w-full flex relative">
                <input
                    dir={props.dir}
                    type={inputType}
                    placeholder={props.placeholder}
                    {...props.register(props.id)}
                    className={`outline-0 border border-gray-300 w-full rounded-r py-2 px-3 ${props.className}`} />
                {props.type === "password" &&
                    <button onClick={() => setInputType(prev => prev === "password" ? "text" : "password")} className="absolute top-3 right-3 cursor-pointer">
                        <BsEye />
                    </button>
                }
                {props.hasSearch && <button 
                // onClick={props.handleSearch}
                 className="bg-gray-500 cursor-pointer rounded-l-sm p-2 text-white">
                    <BiSearch size={20} />
                </button>}
            </div>
        </div>
    )
}

export default Input;
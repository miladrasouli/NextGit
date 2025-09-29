import { SelectCompType } from "@/schema/types";


const Select = (props: SelectCompType) => {
    return (
        <div className="w-full flex flex-col gap-2">
            {props.label && <>
                <label htmlFor={props.id}>{props.label}
                    {props.required && <span className="text-red-500 mx-1">
                        *
                    </span>}
                </label>
            </>}
            <select className={`w-full border border-gray-300 cursor-pointer outline-0 rounded-r py-2 px-3  ${props.className}`}>
                <option value="">وارد نمایید</option>
                {props.list &&
                    props.list.map(item => (
                        <option key={item.key}>
                            {item.value}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select;
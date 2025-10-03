import { ButtonCompType } from "@/schema/types"



const Button = ({ children, type, className }: ButtonCompType) => {
    return (
        <>
            <button type={type} className={`cursor-pointer rounded py-2 px-3 ${className}`}>
                {children}
            </button>
        </>
    )
}

export default Button
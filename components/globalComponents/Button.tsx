import { ButtonCompType } from "@/schema/types"



const Button = ({ children, className }: ButtonCompType) => {
    return (
        <>
            <button className={`cursor-pointer rounded py-2 px-3 ${className}`}>
                {children}
            </button>
        </>
    )
}

export default Button
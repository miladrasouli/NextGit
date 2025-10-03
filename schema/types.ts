import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";


export interface ButtonCompType {
    children: ReactNode;
    type: "submit" | "reset" | "button";
    className?: string;
}

export interface InputCompType {
    type: "text" | "number" | "password";
    label: string;
    id: string;
    name: string;
    required: boolean;
    hasSearch?: boolean;
    placeholder: string;
    className?: string;
    dir?: "rtl" | "ltr";
    register: UseFormRegister<{ [key: string]: string }>;
    handleSearch?: () => void;
}

export interface SelectCompType {
    list: {
        key: string;
        value: string;
    }[];
    id: string;
    label: string;
    required: boolean;

    className?: string;
}
import { ReactNode } from "react";


export interface ButtonCompType {
    children: ReactNode;
    className?: string;
}

export interface InputCompType {
    type: "text" | "number" | "password";
    label: string;
    id: string;
    required: boolean;
    hasSearch?: boolean;
    placeholder: string;
    className?: string;
    dir?: "rtl" | "ltr";
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
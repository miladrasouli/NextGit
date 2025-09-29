import { ReactNode } from "react";


export interface ButtonCompType {
    children: ReactNode;
    className?: string;
}

export interface InputCompType {
    type: "text" | "number";
    label: string;
    id: string;
    required: boolean;
    hasSearch: boolean;
    placeholder: string;
    className?: string;
}
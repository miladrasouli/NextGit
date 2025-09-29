"use client";
import { BiSave } from "react-icons/bi";
import Button from "./Button";
import Input from "./Input";
import { CgClose } from "react-icons/cg";
import { DatePicker } from 'noa-jalali-datepicker';
import { useState } from "react";
import Select from "./Select";

const Modal = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    return (
        <div className="flex items-center justify-center bg-black/30 px-10 sm:px-0 fixed top-0 left-0 w-screen h-screen">
            <div>
                <div className="bg-gray-700 w-full p-3 text-white">
                    افزودن قرارداد
                </div>
                <div className="bg-white p-3 border-b border-b-gray-200 flex flex-col gap-2">
                    <div className="flex flex-wrap sm:flex-nowrap items-center w-full gap-2">
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor={"date"}>
                                تاریخ
                                <span className="text-red-500 mx-1">
                                    *
                                </span>
                            </label>
                            <DatePicker
                                value={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                className="!w-full text-nowrap"
                                inputClassName="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded"
                                popupClassName="w-72 bg-white h-52 overflow-auto absolute flex flex-col shadow-lg border "
                                selectedDayClassName="bg-blue-500 text-white hover:bg-blue-600"
                                holidayClassName="text-red-500 dark:text-red-400"
                                todayClassName="ring-2 ring-blue-500"
                                size="md"
                                weeksClassName="grid grid-cols-7"
                                daysClassName="grid grid-cols-7"
                                dir="rtl"
                            />
                        </div>
                        <Input id="client" type="text" hasSearch placeholder="وارد کنید" label="مشتری" required />
                        <Select id="type" label="نوع" required list={[{
                            key: "",
                            value: ""
                        }]} />
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-center w-full gap-2">
                        <Input id="client" type="text" placeholder="وارد کنید" label="تعداد" required />
                        <Input id="client" type="text" hasSearch placeholder="وارد کنید" label="ارز مبدا" required />
                        <Input id="client" type="text" placeholder="وارد کنید" label="قیمت" required />
                        <Input id="client" type="text" hasSearch placeholder="وارد کنید" label="کوین" required />
                    </div>
                </div>
                <div className="bg-gray-100 p-3 px-5 flex items-end justify-end gap-2">
                    <Button className="bg-blue-700 text-white flex gap-1 items-center">
                        <BiSave />
                        ذخیره
                    </Button>
                    <Button className="bg-gray-500 text-white flex gap-1 items-center">
                        <CgClose />
                        انصراف
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

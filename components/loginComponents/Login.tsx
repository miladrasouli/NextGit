"use client";
import { useForm } from "react-hook-form";
import Button from "../globalComponents/Button";
import Input from "../globalComponents/Input";


const Login = () => {
    const { register, handleSubmit } = useForm()
    const onLoginSubmit = (value: {}) => {
        console.log(value);
    }
    return (
        <section className="w-full flex items-center justify-center p-20">
            <form onSubmit={handleSubmit(onLoginSubmit)} className="w-full p-5 bg-white shadow rounded border border-gray-200 flex flex-col gap-2">
                <p className="py-3 text-center text-xl">Logo</p>
                <Input
                    name=""
                    register={register}
                    dir="ltr"
                    id=""
                    label="نام کاربری"
                    placeholder="وارد کنید"
                    required
                    type="text"
                    className="!p-2 !rounded"
                />
                <Input
                    name=""
                    register={register}
                    dir="ltr"
                    id=""
                    label="رمز عبور"
                    placeholder="وارد کنید"
                    required
                    type="password" className="!p-2 !rounded"
                />
                <Input
                    name=""
                    register={register}
                    dir="rtl"
                    id="captcha"
                    label=""
                    placeholder="تصویر امنیتی"
                    required
                    type="text"
                    className="!p-2 !rounded mt-2 placeholder:pr-8"
                />
                <Button type="submit" className="w-full bg-blue-800 text-white mt-4 hover:bg-blue-800/90 duration-150">
                    ورود
                </Button>
            </form>
            <div>

            </div>
        </section>
    )
}

export default Login;
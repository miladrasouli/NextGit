import Button from "./Button";
import Input from "./Input";


const Modal = () => {
    return (
        <div className="flex items-center justify-center bg-black/30 fixed top-0 left-0 w-screen h-screen">
            <div>
                <div className="bg-gray-700 w-full p-3 text-white">
                    افزودن قرارداد
                </div>
                <div className="bg-white p-2 border-b border-b-gray-200 ">
                    <Input id="client" type="text" hasSearch placeholder="وارد کنید" label="مشتری" required />
                </div>
                <div className="bg-gray-100 p-3 px-5 flex items-end justify-end gap-2">
                    <Button className="bg-blue-700 text-white">
                        ذخیره
                    </Button>
                    <Button className="bg-gray-500 text-white">
                        انصراف
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

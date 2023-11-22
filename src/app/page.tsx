import { CiSearch } from "react-icons/ci";
import { CgMoreVerticalAlt } from "react-icons/cg";
export default function Home() {
    return (
        <main className="h-screen w-full flex overflow-scroll">
            {/* SEACH / Filter */}
            <div className="w-full h-full">
                <div className="w-full h-[10%] bg-white flex items-center border-2 border-gray-100 p-2">
                    <input
                        type="text"
                        placeholder=" Search"
                        className="w-[50%] px-4 py-1.5 rounded-3xl border border-gray-100 focus:outline-none focus:border-gray-100 bg-gray-100 pl-10 mt-1 ml-8" // เพิ่ม mt-4 เพื่อให้เว้นระยะห่างด้านบน 4 หน่วย
                    />
                    <button className="bg-orange-300 text-white py-1.5 px-4 rounded-3xl border border-orange-300 ml-4">
                        Filter
                    </button>
                </div>
                {/* จบ SEACH / Filter */}

                {/* TYPE */}
                <div className="w-full h-[20%] bg-gray-100">
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-10 mt-9 hover:bg-orange-300 hover:text-white focus:outline-none focus:border-orange-300 focus:ring-0 active:bg-orange-300">
                        Coffee
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-300 hover:text-white focus:outline-none focus:border-orange-300 focus:ring-0 active:bg-orange-300">
                        Non Coffee
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-300 hover:text-white focus:outline-none focus:border-orange-300 focus:ring-0 active:bg-orange-300">
                        Food
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-300 hover:text-white focus:outline-none focus:border-orange-300 focus:ring-0 active:bg-orange-300">
                        Snack
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-300 hover:text-white focus:outline-none focus:border-orange-300 focus:ring-0 active:bg-orange-300">
                        Dessert
                    </button>
                    <p className="mt-9 ml-10">
                        <b>Coffee Menu</b>
                    </p>
                </div>
                {/* จบ TYPE */}

                {/* MENU / ITEM */}
                <div className="w-full h-auto flex flex-wrap bg-gray-100">
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[2%] mb-[1%] ml-[5%] mr-[1%]"></div>
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[2%] mb-[1%] ml-[1%] mr-[5%]"></div>
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[1%] mb-[5%] ml-[5%] mr-[1%]"></div>
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[1%] mb-[5%] ml-[1%] mr-[5%]"></div>
                </div>
            </div>
            {/* จบ MENU / ITEM */}

            {/* CUSTOMER INFO */}
            <div className="w-[500px] h-full bg-white flex flex-col">
                <div className="w-full h-[10%] bg-white flex items-center border-2 border-gray-100 p-2">
                    <div className="flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                            src="/img/women.png"
                            alt=""
                            className="max-w-[50px] h-auto object-cover object-center rounded-full"
                        />
                    </div>
                    <div className="ml-5">
                        <p>
                            <b>Albert Flores</b>
                        </p>
                        <p className="text-gray-500">Purrcof@gmail.com</p>
                    </div>
                    <CgMoreVerticalAlt className="ml-20 cursor-pointer text-gray-400 text-lg" />
                </div>
                {/* จบ CUSTOMER INFO */}

                {/* เลือกประเภทการสั่งซื้อ */}
                <div className="w-full h-[70%] bg-white ml-8 mt-10">
                    <p>
                        <b className="text-xl">Cart</b>
                        <b className="text-gray-500 font-normal ml-40 ">
                            Order #3243
                        </b>
                    </p>
                    <button className="bg-white text-black py-1.5 px-4 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                        Dalivery
                    </button>
                    <button className="bg-white text-black py-1.5 px-4 rounded-3xl border border-gray-300  mt-5 ml-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                        Dine in
                    </button>
                    <button className="bg-white text-black py-1.5 px-4 rounded-3xl border border-gray-300  mt-5 ml-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                        Take away
                    </button>
                </div>
                {/* จบเลือกประเภทการสั่งซื้อ */}

                <div className="w-full h-[70%] bg-white"></div>
                <div className="w-full h-[70%] bg-white border-2 border-gray-100 p-2"></div>
            </div>
        </main>
    );
}

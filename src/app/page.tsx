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
                    <button className="bg-orange-400 text-white py-1.5 px-4 rounded-3xl border border-orange-400 ml-4">
                        Filter
                    </button>
                </div>
                {/* จบ SEACH / Filter */}

                {/* TYPE */}
                <div className="w-full h-[20%] bg-gray-100">
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-10 mt-9 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                        Coffee
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                        Non Coffee
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                        Food
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                        Snack
                    </button>
                    <button className="bg-gray-100 text-black py-1.5 px-4 rounded-3xl border border-gray-300 ml-2 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                        Dessert
                    </button>
                    <p className="mt-9 ml-10">
                        <b>Coffee Menu</b>
                    </p>
                </div>
                {/* จบ TYPE */}

                {/* MENU / ITEM */}
                {/* Capucino */}
                <div className="w-full h-auto flex flex-wrap bg-gray-100">
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[2%] mb-[1%] ml-[5%] mr-[1%]">
                        <div className="flex items-start">
                            <img
                                src="/img/capu.png"
                                alt=""
                                className="ml-2 mt-2 rounded-md"
                                width="100"
                                height="100"
                            />
                            <div className="flex flex-col">
                                <span className="ml-6 mt-4 text-xl">
                                    <b>Capucino</b>
                                    <span className="text-orange-400 ml-[29%]">
                                        <b>$4.98</b>
                                    </span>
                                </span>
                                <span className="text-gray-400 ml-6 mt-3 ">
                                    The combination of coffee,
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    milk, and palm sugar makes
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    this drink have a delicious
                                </span>
                                <span className=" ml-6 mt-1 ">
                                    <b>Size</b>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Small
                                    </button>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Large
                                    </button>
                                </span>

                                <div className="flex items-center ml-[-100px] ">
                                    <span className="ml-3 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            -
                                        </span>
                                    </span>
                                    <b className="ml-2 mt-6">3</b>
                                    <span className="ml-2 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            +
                                        </span>
                                    </span>
                                    <button className="bg-gray-100 text-orange-400 py-1.5 w-[220px] rounded-3xl border border-orange-400 ml-7 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                                        Added to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* จบ Capucino */}

                    {/* Latte */}
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[2%] mb-[1%] ml-[5%] mr-[1%]">
                        <div className="flex items-start">
                            <img
                                src="/img/late.png"
                                alt=""
                                className="ml-2 mt-2 rounded-md"
                                width="100"
                                height="100"
                            />
                            <div className="flex flex-col">
                                <span className="ml-6 mt-4 text-xl">
                                    <b>CoffeeLatte</b>
                                    <span className="text-orange-400 ml-[23%]">
                                        <b>$5.98</b>
                                    </span>
                                </span>
                                <span className="text-gray-400 ml-6 mt-3 ">
                                    This caffe latte or coffee lotte
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    is one of the popular types of
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    milk coffee
                                </span>
                                <span className=" ml-6 mt-1 ">
                                    <b>Size</b>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Small
                                    </button>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Large
                                    </button>
                                </span>

                                <div className="flex items-center ml-[-100px] ">
                                    <span className="ml-3 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            -
                                        </span>
                                    </span>
                                    <b className="ml-2 mt-6">2</b>
                                    <span className="ml-2 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            +
                                        </span>
                                    </span>
                                    <button className="bg-gray-100 text-orange-400 py-1.5 w-[220px] rounded-3xl border border-orange-400 ml-7 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                                        Added to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* จบLatte */}

                    {/*  Americano */}
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[2%] mb-[1%] ml-[5%] mr-[1%]">
                        <div className="flex items-start">
                            <img
                                src="/img/ameri.png"
                                alt=""
                                className="ml-2 mt-2 rounded-md"
                                width="100"
                                height="100"
                            />
                            <div className="flex flex-col">
                                <span className="ml-6 mt-4 text-xl">
                                    <b>Americano</b>
                                    <span className="text-orange-400 ml-[28%]">
                                        <b>$5.98</b>
                                    </span>
                                </span>
                                <span className="text-gray-400 ml-6 mt-3 ">
                                    Americano coffee is espresso
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    drink combined with hot
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    water
                                </span>
                                <span className=" ml-6 mt-1 ">
                                    <b>Size</b>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Small
                                    </button>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Large
                                    </button>
                                </span>

                                <div className="flex items-center ml-[-100px] ">
                                    <span className="ml-3 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            -
                                        </span>
                                    </span>
                                    <b className="ml-2 mt-6">1</b>
                                    <span className="ml-2 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            +
                                        </span>
                                    </span>
                                    <button className="bg-gray-100 text-orange-400 py-1.5 w-[220px] rounded-3xl border border-orange-400 ml-7 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                                        Added to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* จบ Americano */}

                    {/*  V60 */}
                    <div className="flex-grow h-[300px] w-[33.33%] rounded-3xl  bg-slate-50 mt-[2%] mb-[1%] ml-[5%] mr-[1%]">
                        <div className="flex items-start">
                            <img
                                src="/img/v60.png"
                                alt=""
                                className="ml-2 mt-2 rounded-md"
                                width="100"
                                height="100"
                            />
                            <div className="flex flex-col">
                                <span className="ml-6 mt-4 text-xl">
                                    <b>V60</b>
                                    <span className="text-orange-400 ml-[57%]">
                                        <b>$5.98</b>
                                    </span>
                                </span>
                                <span className="text-gray-400 ml-6 mt-3 ">
                                    The V60 teachniques is one of
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    the most used techniques by
                                </span>
                                <span className="text-gray-400 ml-6 mt-1 ">
                                    barista.
                                </span>
                                <span className=" ml-6 mt-1 ">
                                    <b>Size</b>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Small
                                    </button>
                                    <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300  mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                                        Large
                                    </button>
                                </span>

                                <div className="flex items-center ml-[-100px] ">
                                    <span className="ml-3 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            -
                                        </span>
                                    </span>
                                    <b className="ml-2 mt-6">3</b>
                                    <span className="ml-2 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span className="text-xs text-black">
                                            +
                                        </span>
                                    </span>
                                    <button className="bg-gray-100 text-orange-400 py-1.5 w-[220px] rounded-3xl border border-orange-400 ml-7 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400">
                                        Added to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* จบ V60 */}
                </div>
            </div>
            {/* จบ MENU / ITEM */}

            {/* CUSTOMER INFO */}
            <div className="w-[500px] h-full bg-white flex flex-col">
                <div className="w-full h-[10%] bg-white flex items-center border-2 border-gray-100 p-2">
                    <div className="flex-shrink-0 rounded-full overflow-hidden">
                        <img
                            src="/img/women.png"
                            alt=""
                            className="relative w-10 h-10 overflow-hidden bg-gray-300 rounded-full m-5"
                        />
                    </div>
                    <div className="ml-1">
                        <p>
                            <b>Albert Flores</b>
                        </p>
                        <p className="text-gray-500">Purrcof@gmail.com</p>
                    </div>
                    <CgMoreVerticalAlt className="ml-20 cursor-pointer text-gray-400 text-lg" />
                </div>
                {/* จบ CUSTOMER INFO */}

                {/* เลือกประเภทการสั่งซื้อ */}
                <div className="w-full h-[60%] bg-white ml-8 mt-10">
                    <p>
                        <b className="text-xl">Cart</b>
                        <b className="text-gray-400 font-normal ml-40 ">
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

                {/* CART / CALC */}
                <div className="w-full h-[60%] bg-white">
                    {/* Capucino*/}
                    <div className="flex items-start">
                        <img
                            src="/img/capu.png"
                            alt=""
                            className="ml-10 rounded-md"
                            width="80"
                            height="80"
                        />
                        <div className="flex flex-col">
                            <span className="ml-5 text-xl">Capucino</span>
                            <span className="text-gray-400 ml-5 mt-2 ">
                                Small ํ 200g
                            </span>
                            <div className="flex items-center">
                                <b className="ml-5 mt-6">$14.94</b>
                                <span className="ml-5 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                    <span className="text-xs text-black">
                                        -
                                    </span>
                                </span>
                                <b className="ml-2 mt-6">3</b>
                                <span className="ml-2 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                    <span className="text-xs text-black">
                                        +
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* จบCapucino*/}

                    {/* Coffee Latte */}
                    <div className="flex items-start mb-6">
                        <img
                            src="/img/late.png"
                            alt=""
                            className="ml-10 mt-10 rounded-md"
                            width="80"
                            height="80"
                        />
                        <div className="flex flex-col">
                            <span className="ml-5 mt-10 text-xl">
                                Coffee Latte
                            </span>
                            <span className="text-gray-400 ml-5 mt-2 ">
                                Small ํ 200g
                            </span>
                            <div className="flex items-center">
                                <b className="ml-5 mt-6">$5.98</b>
                                <span className="ml-5 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                    <span className="text-xs text-black">
                                        -
                                    </span>
                                </span>
                                <b className="ml-2 mt-6">1</b>
                                <span className="ml-2 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                    <span className="text-xs text-black">
                                        +
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* จบCoffee Latte */}
                </div>
                {/* จบ CART / CALC */}

                {/* Payment / Checkout */}
                <div className="w-full h-[100%] bg-white">
                    <p className="mt-3">
                        <b className="text-gray-400  font-normal ml-10">
                            Items
                        </b>
                        <b className="text-gray-400 font-normal ml-[55%] ">
                            $20.92
                        </b>
                    </p>
                    <p className="mb-4">
                        <b className="text-gray-400  font-normal ml-10">
                            Discounts
                        </b>
                        <b className="text-gray-400 font-normal ml-[46%] ">
                            -$3.00
                        </b>
                    </p>
                    <p className="mb-5">
                        <b className="text-gray-400  font-normal ml-10">
                            Total
                        </b>
                        <b className="text-orange-500 font-normal ml-[57.5%]">
                            $17.92
                        </b>
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-orange-400 text-white py-1.5 px-10 rounded-3xl border border-orange-400 ml-4">
                            Place an order
                        </button>
                    </div>
                </div>
                {/* จบ Payment / Checkout */}
            </div>
        </main>
    );
}

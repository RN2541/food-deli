"use client";
import { CiSearch } from "react-icons/ci";
import { CgMoreVerticalAlt } from "react-icons/cg";
import Cards, { Item } from "./Card";
import YourComponent from "./Search";
import React, { useState } from "react";

// import CartPage from "./Cart";

export default function Home() {
    const [order, setOrder] = React.useState<Item[]>([]);

    return (
        <main className="h-screen w-full flex overflow-scroll">
            {/* SEACH / Filter */}
            <div className="w-full h-full">
                <section>
                    <div className="">
                        <YourComponent />
                    </div>
                </section>
                {/* จบ SEACH / Filter */}

                {/* TYPE */}
                <section>
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
                        <p className="flex-1 mt-9 ml-10 ">
                            <b>Coffee Menu</b>
                        </p>
                    </div>
                </section>
                {/* จบ TYPE */}

                {/* MENU / ITEM */}
                <section>
                    <div className="w-full h-auto flex flex-wrap bg-gray-100">
                        <Cards
                            onClick={(item) => {
                                setOrder((prev) => [...prev, item]);
                            }}
                        />
                    </div>
                </section>
            </div>
            {/* จบ MENU / ITEM */}

            {/* CUSTOMER INFO */}
            <div className="w-[500px] h-full bg-white flex flex-col">
                <div className="w-full h-[10%] bg-white flex items-center border-2 border-gray-100 p-2">
                    <div className="flex-shrink-0 rounded-full overflow-hidden ">
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
                <section>
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
                </section>
                {/* จบเลือกประเภทการสั่งซื้อ */}

                {/* CART / CALC */}
                <section>
                    <div className="w-full h-[60%] bg-white ">
                        {order.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <img
                                    src={item.imageSrc}
                                    alt=""
                                    className="ml-8 mt-7 rounded-xl"
                                    width="100"
                                    height="100"
                                />
                                <div className="ml-4">
                                    <b>
                                        <p>{item.name}</p>
                                    </b>
                                    <p>
                                        <span className="text-gray-400">
                                            Size
                                        </span>
                                        <br />
                                        <span>{item.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* จบ CART / CALC */}

                {/* Payment / Checkout */}
                <section>
                    <div className="w-full h-[100%] bg-white"></div>
                </section>
                {/* จบ Payment / Checkout */}
            </div>
        </main>
    );
}

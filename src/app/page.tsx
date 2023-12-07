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
                <div className="">
                    <YourComponent />
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
                    <p className="flex-1 mt-9 ml-10 ">
                        <b>Coffee Menu</b>
                    </p>
                </div>

                {/* จบ TYPE */}

                {/* MENU / ITEM */}
                {/* อเรย์ */}

                <div className="w-full h-auto flex flex-wrap bg-gray-100">
                    <Cards
                        onClick={(item) => {
                            setOrder((prev) => [...prev, item]);
                        }}
                    />
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
                    {order.map((item, index) => (
                        <div key={index}>
                            <p>
                                {item.name}
                                <span>{item.price}</span>
                            </p>
                        </div>
                    ))}
                    {/* <CartPage /> */}
                    {/* Capucino*/}
                    {/* <div className="flex items-start">
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
                    </div> */}
                    {/* จบCapucino*/}
                    {/* Coffee Latte */}
                    {/* <div className="flex items-start mb-6">
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
                    </div> */}
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

"use client";
import { list } from "postcss";
import React, { useState } from "react";
import { setDefaultHighWaterMark } from "stream";

export interface Item {
    imageSrc: string;
    name: string;
    price: number;
    detail: string;
    id: string;
}

function Card({ item, onClick }: { item: Item; onClick: () => void }) {
    const [quantity, setQuantity] = useState<number>(0);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        // ทำสิ่งที่ต้องการเมื่อคลิกปุ่ม "Added to cart"
        console.log(`Added ${quantity} ${item.name} to cart`);
    };

    return (
        <div className="flex-grow h-[300px] rounded-3xl bg-slate-50 mt-[2%] mb-[1%] ml-[8%] mr-[1%]">
            <div key={item.id} className="flex items-start">
                <img
                    src={item.imageSrc}
                    alt=""
                    className="ml-2 mt-2 rounded-md"
                    width="100"
                    height="100"
                />

                <div className="flex flex-col">
                    <div className="flex items-center ml-6 mt-4 text-xl font-bold">
                        <p>{item.name}</p>
                        <span className="text-orange-400 ml-[23%] font-bold">
                            {item.price}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 ml-6 mt-3">
                            {item.detail}
                        </span>
                    </div>
                    <span className="ml-6 mt-1">
                        <b>Size</b>
                        <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300 mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                            Small
                        </button>
                        <button className="bg-white text-black w-20 p-1 ml-2 rounded-3xl border border-gray-300 mt-5 hover:bg-gray-700 hover:text-white focus:outline-none focus:border-gray-300 focus:ring-0 active:bg-gray-300">
                            Large
                        </button>
                    </span>

                    <div className="flex items-center ml-[-100px]">
                        <span
                            className="ml-3 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center cursor-pointer"
                            onClick={handleDecrement}
                        >
                            <span className="text-xs text-black">-</span>
                        </span>
                        <b className="ml-2 mt-6">{quantity}</b>
                        <span
                            className="ml-2 mt-6 inline-block w-7 h-7 rounded-full bg-white border border-gray-400 flex items-center justify-center cursor-pointer"
                            onClick={handleIncrement}
                        >
                            <span className="text-xs text-black">+</span>
                        </span>

                        <button
                            className="bg-gray-100 text-orange-400 py-1.5 w-[220px] rounded-3xl border border-orange-400 ml-7 mt-8 hover:bg-orange-400 hover:text-white focus:outline-none focus:border-orange-400 focus:ring-0 active:bg-orange-400"
                            onClick={onClick}
                        >
                            Added to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Cards({ onClick }: { onClick: (item: Item) => void }) {
    const items: Item[] = [
        {
            imageSrc: "/img/capu.png",
            name: "Capucino",
            price: 4.98,
            detail: "The combination of coffee, milk, and palm sugar makes this drink delicious",
            id: "1",
        },
        {
            imageSrc: "/img/late.png",
            name: "CoffeeLatte",
            price: 5.98,
            detail: "This caffe latte or coffee lotte is one of the popular types of milk coffee",
            id: "2",
        },
        {
            imageSrc: "/img/ameri.png",
            name: "Americano",
            price: 5.98,
            detail: "Americano coffee is espresso drink combined with hot water",
            id: "3",
        },
        {
            imageSrc: "/img/v60.png",
            name: "V60",
            price: 5.98,
            detail: "The V60 techniques is one of the most used techniques by barista.",
            id: "4",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {items.map((item) => (
                <div key={item.id} className="mb-4">
                    <Card
                        item={item}
                        onClick={() => {
                            onClick(item);
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Cards;

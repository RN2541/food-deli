import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RiHome3Line } from "react-icons/ri";
import { BiGridAlt } from "react-icons/bi";
import { BsBookmarkDash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { BiCaretDown } from "react-icons/bi";
import { BiSolidHeartCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-themes="light">
            <body className={inter.className}>
                <section className="relative h-screen w-[100%] flex">
                    {/* ในส่วนของ navbar 1 */}
                    <div className="w-1/5 h-full bg-white flex flex-col justify-center items-center">
                        <div className="w-full h-1/2 bg-white border-2 border-gray-100 p-2">
                            <p className="mt-9  flex justify-center items-center">
                                <b className="text-orange-400 text-2xl">
                                    Purr&#39;
                                </b>
                                <b className="text-2xl">Coffee</b>
                            </p>
                            <p className="relative flex z-10 mt-12  bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <RiHome3Line className="ml-20 " />
                                </span>
                                <span className="ml-2">Home page</span>
                            </p>
                            <p className="relative flex mt-2 z-10 bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <BiGridAlt className="ml-20 " />
                                </span>
                                <span className="ml-2">Menu</span>
                            </p>
                            <p className="relative flex mt-2 z-10 bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <BsBookmarkDash className="ml-20 " />
                                </span>
                                <span className="ml-2">My orders</span>
                                <span className="ml-2 inline-block w-5 h-5 rounded-full bg-orange-400 text-white flex items-center justify-center">
                                    <span className="text-xs">13</span>
                                </span>
                            </p>
                            <p className="relative flex mt-2 z-10 bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <CgFileDocument className="ml-20 " />
                                </span>
                                <span className="ml-2">History</span>
                            </p>
                        </div>
                        {/* จบในส่วนของ navbar 1 */}

                        {/* ในส่วนของ navbar 2 */}
                        <div className="w-full h-1/2 bg-white border-2 border-gray-100 p-2">
                            <p className="relative flex z-10 mt-5  bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <HiOutlineUser className="ml-20 " />
                                </span>
                                <span className="ml-2">Partners</span>
                            </p>
                            <p className="relative flex z-10 mt-2  bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <LuSettings className="ml-20 " />
                                </span>
                                <span className="ml-2">Settings </span>
                                <span className="text-xl">
                                    <BiCaretDown className="ml-2 text-gray-400" />
                                </span>
                            </p>
                            <p className="relative flex z-10 mt-2 mb-20 bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <BiSolidHeartCircle className="ml-20 text-orange-400" />
                                </span>

                                <span className="ml-2">Donate to shelter</span>
                            </p>
                            <p className="relative flex z-10 mt-2  bg-transparent w-full h-[40px] items-center text-sm  text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-[4px] before:origin-top-right before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-orange-400 before:hover:scale-x-100 before:rounded-l-lg">
                                <span className="text-xl">
                                    <HiOutlineLogout className="ml-20 " />
                                </span>

                                <span className="ml-2">Logout</span>
                            </p>
                        </div>
                        {/* จบในส่วนของ navbar 2 */}
                    </div>

                    <div className="static flex-1 h-full bg-slate-200">
                        {children}
                    </div>
                </section>
            </body>
        </html>
    );
}

///ถ้าต้องการที่จะจัดคอลัมให้เพิ่ม flex เข้าไป

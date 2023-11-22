import { CiSearch } from "react-icons/ci";
export default function Home() {
    return (
        <main className="h-screen w-full flex overflow-scroll">
            <div className="w-full h-full">
                {/* SEACH / Filter */}
                <div className="w-full h-[10%] bg-white ">
                    <input
                        type="text"
                        placeholder=" Search"
                        className="w-[50%] px-4 py-1.5 rounded-3xl border border-gray-100 focus:outline-none focus:border-gray-100 bg-gray-100 pl-10 mt-4 ml-8" // เพิ่ม mt-4 เพื่อให้เว้นระยะห่างด้านบน 4 หน่วย
                    />
                    <button className="bg-orange-300 text-white py-1.5 px-4 rounded-3xl border border-orange-300 ml-4">
                        Filter
                    </button>
                </div>
                {/* จบ SEACH / Filter */}
                <div className="w-full h-[10%] bg-indigo-600"></div>
                <div className="w-full h-auto flex flex-wrap">
                    <div className="flex-grow h-[400px] w-[33.33%] bg-slate-50 mt-[2%] mb-[1%] ml-[5%] mr-[1%]"></div>
                    <div className="flex-grow h-[400px] w-[33.33%] bg-slate-50 mt-[2%] mb-[1%] ml-[1%] mr-[5%]"></div>
                    <div className="flex-grow h-[400px] w-[33.33%] bg-slate-50 mt-[1%] mb-[5%] ml-[5%] mr-[1%]"></div>
                    <div className="flex-grow h-[400px] w-[33.33%] bg-slate-50 mt-[1%] mb-[5%] ml-[1%] mr-[5%]"></div>
                </div>
            </div>
            <div className="w-[500px] h-full bg-white flex flex-col">
                {/* CUSTOMER INFO */}
                <div className="w-full h-[10%] bg-indigo-200">
                    <p>Albert Flores</p>
                    <p>Purrcof@gmail.com</p>
                </div>
                {/* จบ CUSTOMER INFO */}
                <div className="w-full h-full bg-indigo-300"></div>
            </div>
        </main>
    );
}

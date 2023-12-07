import React from "react";

const YourComponent: React.FC = () => {
    return (
        <div className="w-full h-[10%] bg-white flex items-center border-2 border-gray-100 p-2 ">
            <input
                type="text"
                placeholder=" Search"
                className="w-[50%] px-4 py-1.5 rounded-3xl border border-gray-100 focus:outline-none focus:border-gray-100 bg-gray-100 pl-10 ml-8 mt-2 mb-2" // เพิ่ม mb-4 เพื่อเพิ่มระยะห่างด้านล่าง 4 หน่วย// เพิ่ม mt-4 เพื่อให้เว้นระยะห่างด้านบน 4 หน่วย
            />
            <button className="bg-orange-400 text-white py-1.5 px-4 rounded-3xl border border-orange-400 ml-4">
                Filter
            </button>
        </div>
    );
};

export default YourComponent;

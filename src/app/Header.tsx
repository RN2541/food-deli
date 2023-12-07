import React, { ChangeEvent } from "react";
import "./Header.css";

interface HeaderProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ value, onChange }) => {
    return (
        <div className="container-header">
            {/* <div>React #3</div> */}
            <div className="label-header">Filter:</div>
            <select value={value} onChange={onChange} className="select-header">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    );
};

export default Header;

import React from "react";

interface SearchInputProps {
    searchTerm: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onChange }) => {
    return (
        <input
            type="text"
            placeholder=" Search"
            className="w-[50%] px-4 py-1.5 rounded-3xl border border-gray-100 focus:outline-none focus:border-gray-100 bg-gray-100 pl-10 mt-1 ml-8"
            value={searchTerm}
            onChange={onChange}
        />
    );
};

export default SearchInput;

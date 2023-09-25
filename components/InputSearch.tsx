import React from "react";

interface InputSearchProps {
    placeholder: string;
    onSearch: (searchText: string) => void;
}

const InputSearch = ({ placeholder, onSearch }: InputSearchProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <div className="flex justify-end">
            <input
                type="search"
                className="border justify-end flex items-end outline-none rounded-md p-2"
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default InputSearch;
import React from 'react';

const Dropdown = ({ options, selectedValue, onChange }) => {
    return (
        <div className="relative inline-block w-full md:w-64">
            <div className="relative">
                <select
                    value={selectedValue}
                    onChange={onChange}
                    className="block appearance-none w-full border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

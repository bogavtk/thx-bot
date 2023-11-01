import cl from './SearchBar.module.css';
import {useState} from "react";
export const SearchBar = ({inputHandler}) => {

    // const handleSearch = () => {
    //     // Здесь можно выполнить поиск с использованием searchTerm
    // };

    return (
    <div className={cl.search_bar}>
        <input
            type="text"
            placeholder="Я ищу..."
            onChange={inputHandler}
        />
        <button>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10.75C8.76142 10.75 11 8.51142 11 5.75C11 2.98858 8.76142 0.75 6 0.75C3.23858 0.75 1 2.98858 1 5.75C1 8.51142 3.23858 10.75 6 10.75Z" stroke="#787878" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 13.25L9.5 9.25" stroke="#787878" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
    );
};

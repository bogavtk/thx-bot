import cl from './SearchBar.module.css';
import {useState} from "react";
import {ILoupe} from "../../../assets/icons";

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
                <ILoupe/>
            </button>
        </div>
    );
};

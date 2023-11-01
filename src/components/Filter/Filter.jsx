import React from 'react';
import cl from './Filter.module.css'
import {FilterBlock} from "./FilterBlock/FilterBlock";
import {BottomButton} from "../BottomButton/BottomButton";



export const Filter = ({namePage, listFilters}) => {

    function removeFilter() {
        localStorage.removeItem('filter')
    }

    return (
        <main className={cl.wrapperFilter}>
            <div className={cl.content}>
                <span className={cl.titleFilter}>{namePage}</span>
                <div className={cl.blockFilter}>
                    {listFilters.map((data, index) => (
                        <FilterBlock nameFilter={data.nameFilter} key={index}/>
                    ))}
                </div>
            </div>
            <div className={cl.footerButton}>
                <BottomButton text={'Назад'} link={'/'} removeFilter={removeFilter}/>
                <BottomButton text={'Посмотреть'} link={'/'}/>
            </div>
        </main>
    );
};


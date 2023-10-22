import React from 'react';
import cl from './Filter.module.css'
import {FilterBlock} from "./FilterBlock/FilterBlock";
import {BottomButton} from "../BottomButton/BottomButton";



export const Filter = ({namePage, listFilters}) => {
    return (
        <main className={cl.wrapperFilter}>
            <div className={cl.content}>
                <span className={cl.titleFilter}>{namePage}</span>
                <div className={cl.blockFilter}>
                    {listFilters.map((data) => {
                        return <FilterBlock nameFilter={data.nameFilter}/>
                    })}
                </div>
            </div>
            <div className={cl.footerButton}>
                <BottomButton text={'Посмотреть'} link={'/'}/>
            </div>
        </main>
    );
};


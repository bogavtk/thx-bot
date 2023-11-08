import React, {useState} from 'react';
import cl from './FilterBlock.module.css'

export const FilterBlock = ({nameFilter}) => {

    function click(nameFilter) {

        if (nameFilter === 'Новинки') {
            localStorage.setItem("filter", 'new')
        } else {
            localStorage.setItem("filter", nameFilter)
        }

    }

    const filter = localStorage.getItem("filter")


    return (
        <div className={cl.blockFilter} >
            <label className={cl.container} onClick={() => {click(nameFilter)}}>
                <span className={cl.nameFilter}>{nameFilter}</span>
                {
                    (filter === nameFilter) || filter === 'new'
                    ?
                        <input type="radio" name="radio" checked={true}/>
                        :
                        <input type="radio" name="radio"/>
                }
                <span className={cl.checkmark}></span>
            </label>
        </div>
    );
};


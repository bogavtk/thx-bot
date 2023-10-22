import React from 'react';
import cl from './FilterBlock.module.css'

export const FilterBlock = ({nameFilter}) => {
    return (
        <div className={cl.blockFilter}>
            <span className={cl.nameFilter}>{nameFilter}</span>
            <label className={cl.container}>
                <input type="radio" name="radio"/>
                <span className={cl.checkmark}></span>
            </label>
        </div>
    );
};


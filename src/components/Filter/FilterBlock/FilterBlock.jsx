import React, {useState} from 'react';
import cl from './FilterBlock.module.css'
import {BlockLabel} from "./BlockLabel/BlockLabel";

export const FilterBlock = ({nameFilter}) => {

    return (
        <div className={cl.blockFilter} >
            <BlockLabel nameFilter={nameFilter}/>
        </div>
    );
};


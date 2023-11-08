import React from 'react';
import cl from './BlockLabel.module.css'

export const BlockLabel = ({nameFilter}) => {

    function click(nameFilter) {
        console.log(nameFilter)

        if (nameFilter === 'Новинки') {
            localStorage.setItem("filter", 'new')
        } else {
            localStorage.setItem("filter", nameFilter)
        }

    }

    const filter = localStorage.getItem("filter")

    return (
        <label className={cl.container} onClick={() => {click(nameFilter)}}>
            <span className={cl.nameFilter}>{nameFilter}</span>
            {
                (filter === nameFilter) || filter === 'new'
                    ?
                    <input type="radio" name="radio" defaultChecked={true}/>
                    :
                    <input type="radio" name="radio"/>
            }
            <span className={cl.checkmark}></span>
        </label>
    );
};


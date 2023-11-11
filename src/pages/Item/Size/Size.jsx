import React, {useState} from 'react';
import classNames from "classnames";
import cl from "./Size.module.css";

export const Size = ({size, card}) => {

    const [stateSize, setStateSize] = useState(false)
    function handleCLickSize() {
        //добавляю, какие размеры выбрал пользователь
        setStateSize(!stateSize)
        localStorage.setItem(size.size, !stateSize)
    }
    // if (stateSize && !card.sizes.includes(size.size)) {
    //     card.sizes.push(size.size)
    // } else if (!stateSize) {
    //     const newList = card.sizes?.filter(function (s) {
    //         return s !== size.size
    //     })
    //
    // }





    return (
        <li
            className={classNames( {
                [cl.blockSize]: true,
                [cl.blocked]: !size.isRetain,
                [cl.choose]: stateSize,
            })}
            onClick={handleCLickSize}
        >
            {size.size}</li>
    );
};


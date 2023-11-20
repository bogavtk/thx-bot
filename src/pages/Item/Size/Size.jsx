import React, {useState} from 'react';
import classNames from "classnames";
import cl from "./Size.module.css";

export const Size = ({size, card}) => {

    const [stateSize, setStateSize] = useState(false)
    function handleCLickSize() {
        //добавляю, какие размеры выбрал пользователь
        setStateSize(!stateSize)
        localStorage.setItem(size, !stateSize)
    }






    return (
        <li
            className={classNames( {
                [cl.blockSize]: true,
                // [cl.blocked]: !size.isRetain,
                [cl.choose]: stateSize,
            })}
            onClick={handleCLickSize}
        >
            {size}</li>
    );
};


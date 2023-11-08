import React, {useState} from 'react';
import classNames from "classnames";
import cl from "./Size.module.css";

export const Size = ({size, card}) => {

    const [stateSize, setStateSize] = useState(false)
    function handleCLickSize() {
        setStateSize(!stateSize)
    }
    if (stateSize && !card.size.includes(size.size)) {
        card.size.push(size.size)
    }

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


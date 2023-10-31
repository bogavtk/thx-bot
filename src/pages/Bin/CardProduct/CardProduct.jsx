import React from 'react';
import cl from "./CardProduct.module.css";

export const CardProduct = ({deleteItem, index, img, name, size, price, item}) => {

    return (
        <li key={index} className={cl.bin_item}>
            <div className={cl.bin_item__left}>
                <img src={img} />
                <div className={cl.bin__text}>
                    <p>{name}</p>
                    <p>Размер: {size}</p>
                </div>
            </div>
            <h4>{price} ₽</h4>
            <button className={cl.deleteButton}
                    onClick={() => {deleteItem(item)}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path fill-rule="evenodd"
                          d="M24.707 8.707a1 1 0 0 0-1.414-1.414L16 14.586 8.707 7.293a1 1 0 0 0-1.414 1.414L14.586 16l-7.293 7.293a1 1 0 1 0 1.414 1.414L16 17.414l7.293 7.293a1 1 0 0 0 1.414-1.414L17.414 16l7.293-7.293Z"
                          clip-rule="evenodd"/>
                </svg>
            </button>
        </li>
    );
};


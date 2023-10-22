import React from 'react';
import cl from "./ItemProduct.module.css";
import img from '../../assets/item/item_img_1.jpg'

export const ItemProduct = ({text, size, price}) => {
    return (
        <div className={cl.bin_item}>
            <div className={cl.bin_item__left}>
                <img src={img}/>
                <div className={cl.bin__text}>
                    <p>{text}</p>
                    <p>Размер: {size}</p>
                </div>
            </div>
            <h4>{price} ₽</h4>
        </div>
    );
};


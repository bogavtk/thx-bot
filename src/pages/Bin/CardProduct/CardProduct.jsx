import React from 'react';
import cl from "./CardProduct.module.css";
import {BottomButton} from "../../../components/BottomButton/BottomButton";
import {ButtonDeleteProduct} from "./ButtonDeleteProduct/ButtonDeleteProduct";

export const CardProduct = ({deleteItem, index, img, name, size, price, item}) => {

    return (
        <li key={index} className={cl.bin_item}>
            <div className={cl.mainInfo}>
                <div className={cl.bin_item__left}>
                    <img src={img} />
                    <div className={cl.bin__text}>
                        <p>{name}</p>
                        <p>Размер: {size}</p>
                    </div>
                </div>
                <h4>{price} ₽</h4>
            </div>
            <ButtonDeleteProduct deleteItem={deleteItem} item={item}/>
        </li>
    );
};


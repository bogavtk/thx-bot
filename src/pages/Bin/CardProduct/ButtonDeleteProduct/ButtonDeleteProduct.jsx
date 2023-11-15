import React from 'react';
import cl from "./ButtonDeleteProduct.module.css";
import {IButtonDelete} from "../../../../assets/icons";

export const ButtonDeleteProduct = ({item, setBinData, binData, setCountProduct, countProduct}) => {

    function deleteItem(item) {
        item.countProduct = item.countProduct - 1
        if (item.countProduct === 0) {
            window.location.reload()
            const newList = binData.filter(i => i.product_id !== item.product_id)
            setBinData(newList)
            localStorage.setItem('items', JSON.stringify(newList))
            if (newList.length === 0) {
                localStorage.removeItem('items')
            }
        } else {
            setCountProduct(countProduct => countProduct - 1)
            const newList = binData.map( i => {
                if (i.product_id === item.product_id) {
                    return item
                }
                return i
            })
            localStorage.setItem('items', JSON.stringify(newList))
        }


    }

    return (
        <div className={cl.deleteButton} onClick={() => {deleteItem(item)}}>
            <IButtonDelete/>
            <span>Удалить</span>
        </div>
    );
};


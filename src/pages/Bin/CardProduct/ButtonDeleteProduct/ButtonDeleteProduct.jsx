import React from 'react';
import cl from "./ButtonDeleteProduct.module.css";

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
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3335 28.5C8.60016 28.5 7.97216 28.2387 7.4495 27.716C6.92683 27.1933 6.66594 26.5658 6.66683 25.8333V8.5H5.3335V5.83333H12.0002V4.5H20.0002V5.83333H26.6668V8.5H25.3335V25.8333C25.3335 26.5667 25.0722 27.1947 24.5495 27.7173C24.0268 28.24 23.3993 28.5009 22.6668 28.5H9.3335ZM22.6668 8.5H9.3335V25.8333H22.6668V8.5ZM12.0002 23.1667H14.6668V11.1667H12.0002V23.1667ZM17.3335 23.1667H20.0002V11.1667H17.3335V23.1667Z" fill="white"/>
            </svg>
            <span>Удалить</span>
        </div>
    );
};


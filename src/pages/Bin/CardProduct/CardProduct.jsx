import React, {useEffect, useState} from 'react';
import cl from "./CardProduct.module.css";
import {ButtonDeleteProduct} from "./ButtonDeleteProduct/ButtonDeleteProduct";

export const CardProduct = ({index, img, name, size, price, item, count, setBinData, binData, setRender}) => {

    const [countProduct, setCountProduct] = useState(count)

    return (
        <div key={index} className={cl.bin_item}>
            <div className={cl.mainInfo}>
                <div className={cl.bin_item__left}>
                    <img src={img}/>
                    <div className={cl.bin__text}>
                        <p>{name}</p>
                        <p className={cl.blockSizes}>Размеры:
                            <span className={cl.listSizes}>
                                {size.map(elem => (
                                    size.at(-1) === elem
                                        ?
                                        <span>{elem}</span>
                                        :
                                        <span>{elem},</span>
                                ))}
                            </span>
                        </p>
                        <p>Количество: {countProduct}</p>
                    </div>
                </div>
                <h4>{price} ₽</h4>
            </div>
            <ButtonDeleteProduct
                item={item}
                setBinData={setBinData}
                binData={binData}
                setCountProduct={setCountProduct}
                countProduct={countProduct}
            />
        </div>
    );
};


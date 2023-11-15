import React, {useEffect, useState} from 'react';
import cl from "./CardProduct.module.css";
import {ButtonDeleteProduct} from "./ButtonDeleteProduct/ButtonDeleteProduct";
import {getSrcImageProduct} from "../../../api/api";

export const CardProduct = ({img, name, size, price, item, count, setBinData, binData, setRender}) => {

    const [countProduct, setCountProduct] = useState(count)

    return (
        <div className={cl.bin_item}>
            <div className={cl.mainInfo}>
                <div className={cl.bin_item__left}>
                    <img src={getSrcImageProduct(img)}/>
                    <div className={cl.bin__text}>
                        <p>{name}</p>
                        <p className={cl.blockSizes}>Размеры:
                            <span className={cl.listSizes}>
                                {size?.map((elem, index) => (
                                    size.at(-1) === elem
                                        ?
                                        <span key={index}>{elem}</span>
                                        :
                                        <span key={index}>{elem},</span>
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


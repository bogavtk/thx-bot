import React from 'react';
import cl from './BlockOrder.module.css'
import littleImg from '../../../assets/littleImg.png'
import {useNavigate} from "react-router-dom";

export const BlockOrder = ({deliveryMethod, date, price, status, id}) => {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/order/${id}`)
    }


    return (
        <div className={cl.wrapperOrder} onClick={handleClick}>
            <div className={cl.firstInfo}>
                <span className={cl.deliveryMethod}>{deliveryMethod}</span>
                <span className={cl.date}>{date}</span>
                <div className={cl.blockImgs}>
                    <img src={littleImg}/>
                    <img src={littleImg}/>
                    <img src={littleImg}/>
                    <img src={littleImg}/>
                    <img src={littleImg}/>
                </div>
            </div>
            <div className={cl.secondInfo}>
                <span className={cl.price}>{price} ₽</span>
                <span className={cl.statusOrder}>{status}</span>
            </div>

        </div>
    );
};


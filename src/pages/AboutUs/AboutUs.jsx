import React from 'react';
import cl from './AboutUs.module.css'
import thx_img from '../../assets/thx_b.png'
import {NavLink} from "react-router-dom";

export const AboutUs = () => {
    return (
        <div className={cl.wrapperAbout}>
            <img src={thx_img}/>
            <div className={cl.info}>
                <span className={cl.title}>
                    Меню, доставка и лояльность для онлайн магазинов в Telegram
                </span>
                <span className={cl.titleBold}>
                    Работает на основе искуственного интеллекта
                </span>
                <span className={cl.titleThin}>
                    Первые 30 дней - бесплатно
                </span>
                <NavLink to={'/aboutInfo'}>
                    <span className={cl.link}>Связаться с нами</span>
                </NavLink>
            </div>
        </div>
    );
};


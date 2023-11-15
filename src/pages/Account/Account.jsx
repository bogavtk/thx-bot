import React from 'react';
import cl from './Account.module.css'
import photo from '../../assets/photo.png'
import dot from '../../assets/dot.png'
import vec from '../../assets/Vector.png'
import {IDot, ILoyal, IOrders, IPhone} from "../../assets/icons";

export const Account = () => {
    return (
        <div className={cl.wrapperAccount}>
            <div className={cl.firstBlock}>
                <img src={photo}/>
                <div className={cl.nameInfo}>
                    <span className={cl.nameUser}>Kamilya</span>
                    <div className={cl.phoneId}>
                        <span>ID: 497061124</span>
                        <IDot/>
                        <span>+7 (978) 234 56 23</span>
                    </div>
                </div>
            </div>
            <div className={cl.detailInfo}>
                <div className={cl.infoBlock}>
                    <IPhone/>
                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Номер телефона</span>
                        <span className={cl.detailInfoRow_numberPhone}>+7 (987) 345 65 63</span>
                    </div>
                </div>
                <div className={cl.infoBlock}>
                    <img src={vec} alt={'Иконка бонусов'}/>
                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Бонусов</span>
                        <span className={cl.detailInfoRow}>500</span>
                    </div>
                </div>
                <div className={cl.infoBlock}>
                    <ILoyal/>
                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Уровень лояльности</span>
                        <span className={cl.detailInfoRow}>Любитель</span>
                    </div>
                </div>
                <div className={cl.infoBlock}>
                    <IOrders/>
                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Заказов</span>
                        <span className={cl.detailInfoRow}>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

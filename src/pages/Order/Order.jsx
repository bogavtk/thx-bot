import React from 'react';
import cl from './Order.module.css'
import {useNavigate} from "react-router-dom";
import {BlockText} from "../../components/BlockText/BlockText";
import {BottomButton} from "../../components/BottomButton/BottomButton";
import {ItemProduct} from "../../components/ItemProduct/ItemProduct";
import {IArrowLeft, IDate, IDot, ILocal, IPaid} from "../../assets/icons";

export const Order = () => {
    const navigate = useNavigate()

    return (
        <div className={cl.wrapperOrder}>
            <div className={cl.ordersBack} onClick={() => navigate('/orders')}>
                <IArrowLeft/>
                <h4>Заказ</h4>
            </div>
            <div className={cl.detailsOrder}>

                <div className={cl.iconBlock}>
                    <IDate/>
                    <div className={cl.blockText}>
                        <BlockText firstTitle={'Время заказа:'} secondTitle={'16 марта, 18:00'}/>
                        <BlockText firstTitle={'Дата получения:'} secondTitle={'18 марта, 18:00'}/>
                    </div>
                </div>

                <div className={cl.iconBlock}>
                    <ILocal/>
                    <div className={cl.blockText}>
                        <BlockText firstTitle={'Адрес доставки:'} secondTitle={'ул.Сибгатуллина д.17 кв.23'}/>
                    </div>
                </div>


                <div className={cl.iconBlock}>
                    <IPaid/>
                    <div className={cl.blockText}>
                        <BlockText firstTitle={'Способ оплаты:'} secondTitle={'оффлайн оплата'}/>
                    </div>
                </div>

            </div>
            <BottomButton text={'Повторить заказ'} link={'/'}/>
            <hr className={cl.customHR}/>
            <div className={cl.productsOrder}>
                <span>Детали заказы</span>
                <ItemProduct text={'Женские кроссовки STREETBEAT Shady'} price={'9 499'} size={'37'}/>
                <ItemProduct text={'Женские кроссовки STREETBEAT Shady'} price={'9 499'} size={'37'}/>
            </div>
            <div className={cl.sumPrice}>
                <hr className={cl.customHR}/>
                <div className={cl.total}>
                    <span className={cl.title}>Итого:</span>
                    <span className={cl.price}>18 998 ₽</span>
                </div>
            </div>
        </div>
    );
};


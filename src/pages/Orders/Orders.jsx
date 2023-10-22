import React from 'react';
import cl from './Orders.module.css'
import {BlockOrder} from "./BlockOrder/BlockOrder";

const listOrders = [
    {id: 1, deliveryMethod: 'Доставка', date: '18 марта 2023', price: '9 499', status: 'Получен'},
    {id: 2, deliveryMethod: 'Доставка', date: '18 марта 2023', price: '9 499', status: 'Получен'},
    {id: 3, deliveryMethod: 'Доставка', date: '18 марта 2023', price: '9 499', status: 'Получен'},
    {id: 4, deliveryMethod: 'Доставка', date: '18 марта 2023', price: '9 499', status: 'Получен'},
    {id: 5, deliveryMethod: 'Доставка', date: '18 марта 2023', price: '9 499', status: 'Получен'},
    {id: 6, deliveryMethod: 'Доставка', date: '18 марта 2023', price: '9 499', status: 'Получен'},
]

export const Orders = () => {
    return (
        <div className={cl.orders}>
            <span className={cl.titleOrders}>Заказы</span>
            <div className={cl.blockOrders}>
                {listOrders.map((data) => {
                    return <BlockOrder deliveryMethod={data.deliveryMethod}
                                       date={data.date}
                                       price={data.price}
                                       status={data.status}
                                       id={data.id}
                    />
                })}
            </div>
        </div>
    );
};


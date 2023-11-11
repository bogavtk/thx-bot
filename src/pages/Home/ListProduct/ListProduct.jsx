import React from 'react';
import cl from './LIstProduct.module.css'
import {HomeItem} from "../HomeItem/HomeItem";

export const ListProduct = ({dataProduct, input}) => {

    const filteredData = dataProduct.filter((el) => {
        if (input === '') {
            return el;
        }
        else {
            return el.product_name.toLowerCase().includes(input)
        }
    })


    return (
        <section className={cl.home__cards}>
            {filteredData.map((card) => (
                <HomeItem key={card.id} card={card}/>
            ))}
        </section>
    );
};


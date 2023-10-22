import cl from './HomeItem.module.css';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
export const HomeItem = ({ card }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/item/${card.id}`);
    };

    const handleButtonClick = (event) => {
        event.stopPropagation();
        let dataArray = [];
        if (localStorage.getItem('items')) {
            dataArray = JSON.parse(localStorage.getItem('items'));
        }

        // Шаг 2: Проверяем, существует ли объект с таким же id
        const itemId = card.id;
        const isItemExist = dataArray.some(item => item.id === itemId);

        // Шаг 3: Если объект с таким id не существует, добавляем его в массив
        if (!isItemExist) {
            dataArray.push(card);
            // Шаг 4: Обновляем localStorage с обновленным массивом
            localStorage.setItem('items', JSON.stringify(dataArray));
        }
    };

    return (
        <section className={cl.card} onClick={handleCardClick}>
            <img src={card.img} alt="Картинка"/>
            <div className={cl.card__text}>
                <h4>{card.price} ₽</h4>
                <p>{card.text}</p>
            </div>
            <button className={cl.card__button} onClick={handleButtonClick}>
                + <span>Добавить</span>
            </button>
        </section>
    );
};

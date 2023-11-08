import cl from './HomeItem.module.css';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {addProduct} from "../../../utils/addProduct";
export const HomeItem = ({ card }) => {

    const [count, setCount] = useState(card.countProduct)
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/item/${card.id}`);
    };

    const handleButtonClick = (event) => {
        setCount(count => count + 1)
        addProduct(event, card, count)
    };

    return (
        <section className={cl.card} onClick={handleCardClick}>
            <img src={card.img.profile} alt="Картинка"/>
            <div className={cl.blockMainText}>
                <span className={cl.name}>{card.name}</span>
                <span className={cl.desc}>{card.desc}</span>
            </div>

            <div className={cl.bottomCard}>
                <h4 className={cl.price}>{card.price} ₽</h4>
                {
                    count > 0
                        ?
                        <button className={cl.card__button} onClick={handleButtonClick}>
                            + <span>{count}</span>
                        </button>

                        :
                        <button className={cl.card__button} onClick={handleButtonClick}>
                            + <span>Добавить</span>
                        </button>
                }
            </div>

        </section>
    );
};

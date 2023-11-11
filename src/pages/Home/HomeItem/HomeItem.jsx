import cl from './HomeItem.module.css';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {addProduct} from "../../../utils/addProduct";
export const HomeItem = ({ card }) => {

    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/item/${card.product_id}`);
    };

    const handleButtonClick = (event) => {
        setCount(count => count + 1)
        addProduct(event, card, count)
    };

    return (
        <section className={cl.card} onClick={handleCardClick}>
            {/*<img src={card.img.profile} alt="Картинка"/>*/}
            <div className={cl.blockMainText}>
                <span className={cl.name}>{card.product_name}</span>
                <span className={cl.desc}>{card.description}</span>
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

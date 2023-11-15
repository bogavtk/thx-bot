import cl from './Item.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import {BottomButton} from "../../components/BottomButton/BottomButton";
import {useEffect, useState} from "react";
import img from "../../assets/item/item_img_1.jpg";
import img2 from "../../assets/item/item_img_2.jpg";
import classNames from "classnames";
import dataCard, {dataCards} from '../Home/data'
import {addProduct} from "../../utils/addProduct";

// Swiper

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Size} from "./Size/Size";
import {getProduct} from "../../api/api";

// Swiper

export const Item = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState(0)
    const itemID = parseInt(id, 10);

    const [card, setCard] = useState([])


    const itemData = {
        sizes: [
            {
                size: 36,
                isRetain: true
            },
            {
                size: 37,
                isRetain: true
            },
            {
                size: 38,
                isRetain: false
            },
        ],

    }

    const [isStorageEmpty, setIsStorageEmpty] = useState(true);

    useEffect(() => {
        const localStorageData = localStorage.getItem('items');
        if (localStorageData) {
            const dataArray = JSON.parse(localStorageData);

            if (dataArray.length > 0) {

                setIsStorageEmpty(false);
            }
        }

        getProduct().then((res) => {
            const listData = res.data.result
            const newCard = listData.find(function (item) {
                return item.product_id === itemID
            })
            setCard(newCard)
        })

    }, []);



    const handleButtonClick = (event) => {
        //Здесь проверяю, какие размеры выбрал пользователь
        itemData.sizes.forEach((elem) => {
            if (localStorage.getItem(elem.size)) {
                const sizeNumber = JSON.parse(localStorage.getItem(elem.size))
                if (sizeNumber) {
                    if (!card.sizes?.includes(elem.size)) {
                        card.sizes?.push(elem.size)
                    }

                }
            }
        })


        setCount(count => count + 1)
        card.countProduct = count + 1
        event.stopPropagation();
        let dataArray = [];
        if (localStorage.getItem('items')) {
            dataArray = JSON.parse(localStorage.getItem('items'));
        }

        // Шаг 2: Проверяем, существует ли объект с таким же id
        const itemId = card.product_id;
        const isItemExist = dataArray.some(item => item.product_id === itemId);

        // Шаг 3: Если объект с таким id не существует, добавляем его в массив
        if (isItemExist) {
            const newDataArray = dataArray.filter( (item) => item.product_id !== itemId)
            newDataArray.push(card);
            // Шаг 4: Обновляем localStorage с обновленным массивом
            localStorage.setItem('items', JSON.stringify(newDataArray));
        } else {
            dataArray.push(card);
            localStorage.setItem('items', JSON.stringify(dataArray));
        }
    };


    return (
        <main className={cl.item}>
            <div className={cl.item_back} onClick={() => navigate('/')}>
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.29593 10L10.7879 1.27303C10.8578 1.2027 10.9131 1.1192 10.9506 1.02737C10.988 0.935541 11.0068 0.837197 11.006 0.738032C11.0052 0.638867 10.9847 0.54085 10.9458 0.449653C10.9068 0.358456 10.8501 0.275889 10.7791 0.206732C10.708 0.137574 10.6239 0.0831989 10.5317 0.0467521C10.4395 0.0103053 10.3409 -0.00748911 10.2418 -0.0056014C10.1426 -0.00371369 10.0448 0.0178187 9.95405 0.0577496C9.86327 0.0976806 9.78132 0.155217 9.71293 0.22703L0.712928 9.47703C0.576706 9.61704 0.500488 9.80468 0.500488 10C0.500488 10.1954 0.576706 10.383 0.712928 10.523L9.71293 19.773C9.78132 19.8448 9.86327 19.9024 9.95405 19.9423C10.0448 19.9822 10.1426 20.0038 10.2418 20.0057C10.3409 20.0075 10.4395 19.9898 10.5317 19.9533C10.6239 19.9169 10.708 19.8625 10.7791 19.7933C10.8501 19.7242 10.9068 19.6416 10.9458 19.5504C10.9847 19.4592 11.0052 19.3612 11.006 19.262C11.0068 19.1629 10.988 19.0645 10.9506 18.9727C10.9131 18.8809 10.8578 18.7974 10.7879 18.727L2.29593 10Z"
                        fill="black"/>
                </svg>
            </div>

                {/*<Swiper*/}
                {/*    modules={[Navigation, Pagination ]}*/}
                {/*    slidesPerView={1}*/}
                {/*    pagination={true}*/}
                {/*    loop={true}*/}
                {/*    spaceBetween={0}*/}
                {/*    className={cl.swiper}*/}
                {/*>*/}
                {/*    <SwiperSlide className={cl.swiper_slide}>*/}
                {/*        <img src={card.img.profileCard} alt={'Profile'} className={cl.item__img}/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cl.swiper_slide}>*/}
                {/*        <img src={card.img.photo} alt={'Profile'} className={cl.item__img}/>*/}
                {/*    </SwiperSlide>*/}

                {/*</Swiper>*/}

            <section className={cl.item__info}>
                <div className={cl.item__name}>
                    <h4>{card.product_name}</h4>
                    <span className={cl.item__price}>Цена: {card.price}</span>
                    <p>{card.category} кроссовки</p>
                </div>
            </section>

            <section className={cl.item__block_sizes}>
                <p>Размеры</p>
                <ul className={cl.item__sizes}>
                    {itemData.sizes.map((size, i) => {
                        return (
                            <Size size={size} card={card} key={i}/>
                        )
                    })}
                </ul>

            </section>


            <section className={cl.item__description}>
                <h4>Описание</h4>
                <p>{card.description}</p>
            </section>

            <div className={cl.twoButton}>
                <section className={cl.item__button_wrap}>
                    {
                        count > 0
                            ?
                            <button className={cl.item__button} onClick={handleButtonClick}>
                                + <span>{count}</span>
                            </button>
                            :
                            <button className={cl.item__button} onClick={handleButtonClick}>
                                + <span>Добавить</span>
                            </button>
                    }
                </section>
                <BottomButton link={'/bin'} text="Корзина"/>
            </div>
        </main>
    );
};

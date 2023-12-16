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

import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Size} from "./Size/Size";
import {getProduct} from "../../api/api";
import {IArrowLeft} from "../../assets/icons";

// Swiper

export const Item = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState(0)
    const itemID = parseInt(id, 10);

    const [card, setCard] = useState([])
    const [sizes, setSizes] = useState([])


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

            setSizes(newCard.sizes)

        })

    }, []);

    console.log(sizes)


    const handleButtonClick = (event) => {
        //Здесь проверяю, какие размеры выбрал пользователь
        sizes.forEach((elem) => {
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
            const newDataArray = dataArray.filter((item) => item.product_id !== itemId)
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
            <div className={cl.item_back} onClick={() => navigate('/home')}>
                <IArrowLeft/>
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
                    {sizes.map((size, i) => {
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

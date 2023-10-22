import cl from './Home.module.css';
import {SearchBar} from "./SearchBar/SearchBar";
import {HomeItem} from "./HomeItem/HomeItem";
import img from '../../assets/item/item_img_1.jpg';
import {BottomButton} from "../../components/BottomButton/BottomButton";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

export const Home = () => {
    const [isStorageEmpty, setIsStorageEmpty] = useState(true);

    useEffect(() => {
        const localStorageData = localStorage.getItem('items');
        if (localStorageData) {
            const dataArray = JSON.parse(localStorageData);

            if (dataArray.length > 0) {
                setIsStorageEmpty(false);
            }
        }
    }, []);


    const dataCards = [
        {
            id: 1,
            text: "Женские кроссовки STREETBEAT Shady",
            price: "9 499",
            img: img,
            size: 37
        },
        {
            id: 2,
            text: "Женские кроссовки STREETBEAT Shady",
            price: "9 499",
            img: img,
            size: 37
        },
        {
            id: 3,
            text: "Женские кроссовки STREETBEAT Shady",
            price: "9 499",
            img: img,
            size: 37
        },
        {
            id: 4,
            text: "Женские кроссовки STREETBEAT Shady",
            price: "9 499",
            img: img,
            size: 37
        },
        {
            id: 5,
            text: "Женские кроссовки STREETBEAT Shady",
            price: "9 499",
            img: img,
            size: 37
        },
    ]


    return (
        <>
            <main className={cl.home}>
                <section className={cl.home__header}>
                    <SearchBar/>
                    <button className={cl.home__filter}>
                        <NavLink to="/filter">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.75 5H17.75M13.75 3V7M13.75 5H2.75M6.75 12H2.75M10.75 10V14M21.75 12H10.75M20.75 19H17.75M13.75 17V21M13.75 19H2.75"
                                    stroke="#037EE5" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </NavLink>
                    </button>
                </section>

                <section className={cl.home_categories}>
                    <NavLink to={"/category"}>
                        <div className={cl.wrapperCategories}>
                            <div className={cl.home_categories__text}>
                                <h4>Категории</h4>
                                <p>Все товары</p>
                            </div>
                            <button>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.13605 7.00002L0.474715 12.818C0.428104 12.8649 0.391255 12.9206 0.366299 12.9818C0.341343 13.043 0.328775 13.1086 0.329325 13.1747C0.329874 13.2408 0.343529 13.3061 0.369498 13.3669C0.395468 13.4277 0.433237 13.4828 0.48062 13.5289C0.528004 13.575 0.58406 13.6112 0.645545 13.6355C0.70703 13.6598 0.772725 13.6717 0.838826 13.6704C0.904926 13.6692 0.97012 13.6548 1.03064 13.6282C1.09115 13.6016 1.14579 13.5632 1.19138 13.5154L7.19138 7.34869C7.2822 7.25534 7.33301 7.13025 7.33301 7.00002C7.33301 6.86979 7.2822 6.7447 7.19138 6.65135L1.19138 0.484686C1.14579 0.43681 1.09115 0.398454 1.03064 0.371834C0.97012 0.345213 0.904926 0.330858 0.838826 0.329599C0.772725 0.328341 0.70703 0.340203 0.645545 0.364502C0.58406 0.3888 0.528004 0.425049 0.48062 0.471154C0.433237 0.51726 0.395468 0.572304 0.369498 0.633102C0.343529 0.6939 0.329874 0.759245 0.329325 0.825356C0.328775 0.891465 0.341343 0.957028 0.366299 1.01825C0.391255 1.07947 0.428104 1.13513 0.474715 1.18202L6.13605 7.00002Z"
                                        fill="#787878"/>
                                </svg>
                            </button>
                        </div>
                    </NavLink>
                </section>

                <section className={cl.home__cards}>
                    {dataCards.map((card) => {
                        return (
                            <HomeItem key={card.id} card={card}/>
                        )
                    })}

                </section>

                {!isStorageEmpty &&
                    <BottomButton link={'/bin'} text="Корзина"/>
                }
            </main>
        </>
    );
};

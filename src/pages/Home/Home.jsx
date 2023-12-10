import cl from './Home.module.css';
import {SearchBar} from "./SearchBar/SearchBar";
import {HomeItem} from "./HomeItem/HomeItem";
import {BottomButton} from "../../components/BottomButton/BottomButton";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {dataCards} from "./data";
import {ListProduct} from "./ListProduct/ListProduct";
import axios, * as others from 'axios';
import {getImageProduct, getProduct} from "../../api/api";
import {IArrowRight, IFilter} from "../../assets/icons";
import {Footer} from "../../components/Footer/Footer";



export const Home = () => {
    const [isStorageEmpty, setIsStorageEmpty] = useState(true);
    const [dataProduct, setDataProduct] = useState([])

    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    useEffect(() => {
        getProduct().then((res) => {
            console.log(res.data.result)
            setDataProduct(res.data.result)
        })

        // getImageProduct('1').then((res) => {
        //     console.log(res)
        // })

        const localStorageData = localStorage.getItem('items');
        if (localStorageData) {
            const dataArray = JSON.parse(localStorageData);
            if (dataArray.length > 0) {
                setIsStorageEmpty(false);
            }
        }

    }, []);


    const localStorageFilter = localStorage.getItem('filter')

    useEffect(() => {
        if ((localStorageFilter === 'Все товары') || (localStorageFilter === 'По умолчанию') || !localStorageFilter) {
            setDataProduct(dataProduct)
        } else if ((localStorageFilter === 'Мужская обувь') || (localStorageFilter === 'Женская обувь')) {
            getProduct().then((res) => {
                const list = res.data.result
                const filterDataCards = list.filter(function (card) {
                    return card.category === localStorageFilter
                })
                setDataProduct(filterDataCards)
            })
        } else if (localStorageFilter === 'По возрастанию') {
            getProduct().then((res) => {
                const list = res.data.result
                list.sort(function (a,b) {
                    const priceA = a.price
                    const priceB = b.price
                    return  priceA - priceB
                })
                setDataProduct(list)
            })

        } else if (localStorageFilter === 'По убыванию') {
            getProduct().then((res) => {
                const list = res.data.result
                list.sort(function (a,b) {
                    const priceA = a.price
                    const priceB = b.price
                    return  priceB - priceA
                })
                setDataProduct(list)
            })
        } else if (localStorageFilter === 'new') {
            const filterDataCards = dataCards.filter(function (card) {
                return card.new === localStorageFilter
            })
            setDataProduct(filterDataCards)
        }

    }, [])

    return (
        <div className={cl.App}>
            <main className={cl.home}>
                <section className={cl.home__header}>
                    <SearchBar inputHandler={inputHandler}/>
                    <button className={cl.home__filter}>
                        <NavLink to="/filter">
                            <IFilter/>
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
                                <IArrowRight/>
                            </button>
                        </div>
                    </NavLink>
                </section>

                <ListProduct dataProduct={dataProduct} input={inputText}/>

                <div className={cl.wrapperFixedButton}>
                    <BottomButton link={'/bin'} text="Корзина"/>
                    <Footer/>
                </div>
            </main>
        </div>
    );
};

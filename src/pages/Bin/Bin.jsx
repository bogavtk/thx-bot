import cl from './Bin.module.css';
import {useNavigate} from "react-router-dom";
import {BottomButton} from "../../components/BottomButton/BottomButton";
import {useEffect, useState} from "react";
import noorders from '../../assets/basket.png'
import {CardProduct} from "./CardProduct/CardProduct";


import img from "../../assets/item/item_img_1.jpg";
import {getSrcImageProduct} from "../../api/api";

export const Bin = () => {
    const navigate = useNavigate();
    const [isEmpty, setIsEmpty] = useState()
    const [binData, setBinData] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('items');
        var dataArray = [];
        if (localStorageData) {
            setBinData(JSON.parse(localStorageData));
        }
    }, []);




    return (
        <main className={cl.bin}>
            {
                localStorage.getItem('items')
                    ?
                    <>
                        <section className={cl.bin__header}>
                            <div className={cl.bin_back} onClick={() => navigate('/')}>
                                <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.29593 10L10.7879 1.27303C10.8578 1.2027 10.9131 1.1192 10.9506 1.02737C10.988 0.935541 11.0068 0.837197 11.006 0.738032C11.0052 0.638867 10.9847 0.54085 10.9458 0.449653C10.9068 0.358456 10.8501 0.275889 10.7791 0.206732C10.708 0.137574 10.6239 0.0831989 10.5317 0.0467521C10.4395 0.0103053 10.3409 -0.00748911 10.2418 -0.0056014C10.1426 -0.00371369 10.0448 0.0178187 9.95405 0.0577496C9.86327 0.0976806 9.78132 0.155217 9.71293 0.22703L0.712928 9.47703C0.576706 9.61704 0.500488 9.80468 0.500488 10C0.500488 10.1954 0.576706 10.383 0.712928 10.523L9.71293 19.773C9.78132 19.8448 9.86327 19.9024 9.95405 19.9423C10.0448 19.9822 10.1426 20.0038 10.2418 20.0057C10.3409 20.0075 10.4395 19.9898 10.5317 19.9533C10.6239 19.9169 10.708 19.8625 10.7791 19.7933C10.8501 19.7242 10.9068 19.6416 10.9458 19.5504C10.9847 19.4592 11.0052 19.3612 11.006 19.262C11.0068 19.1629 10.988 19.0645 10.9506 18.9727C10.9131 18.8809 10.8578 18.7974 10.7879 18.727L2.29593 10Z"
                                        fill="black"/>
                                </svg>
                                <h4>Корзина</h4>
                            </div>

                            <button onClick={() => {
                                localStorage.removeItem('items');
                                setIsEmpty(false)}}>
                                Очистить
                            </button>
                        </section>
                        <div className={cl.bin__list}>
                            {binData.map((item, index) => (
                                <div className={cl.wrappTest}>
                                    <CardProduct
                                        index={index}
                                        item={item}
                                        img={item.product_id}
                                        name={item.name}
                                        price={item.price}
                                        size={item.sizes}
                                        count={item.countProduct}
                                        setBinData={setBinData}
                                        binData={binData}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className={cl.sumPrice}>
                            <span className={cl.title}>Итого:</span>
                            <span className={cl.numberPrice}>18 998 ₽</span>
                        </div>

                        <BottomButton link={'/bin'} text="Оформить заказ"/>
                    </>
                    :
                    <div className={cl.noOrders}>
                        <img src={noorders}/>
                        <span>У вас пока нет заказов</span>
                        <BottomButton link={'/'} text={'Назад'}/>
                    </div>
            }
        </main>
    );
};

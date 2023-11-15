import cl from './Bin.module.css';
import {useNavigate} from "react-router-dom";
import {BottomButton} from "../../components/BottomButton/BottomButton";
import {useEffect, useState} from "react";
import noorders from '../../assets/basket.png'
import {CardProduct} from "./CardProduct/CardProduct";


import img from "../../assets/item/item_img_1.jpg";
import {getSrcImageProduct} from "../../api/api";
import {IArrowLeft} from "../../assets/icons";

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
                                <IArrowLeft/>
                                <h4>Корзина</h4>
                            </div>

                            <button onClick={() => {
                                localStorage.removeItem('items');
                                setIsEmpty(false)
                            }}>
                                Очистить
                            </button>
                        </section>
                        <div className={cl.bin__list}>
                            {binData.map((item, index) => (
                                <div className={cl.wrappTest} key={index}>
                                    <CardProduct
                                        item={item}
                                        img={item.product_id}
                                        name={item.name}
                                        price={item.price}
                                        size={item.sizes}
                                        count={item.countProduct}
                                        setBinData={setBinData}
                                        binData={binData}
                                        key={index}
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

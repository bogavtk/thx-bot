import React from 'react';
import cl from './AboutInfo.module.css'
import frame from '../../assets/Frame.png'
import {BlockText} from "../../components/BlockText/BlockText";
import {TextInfo} from "./TextInfo/TextInfo";
import {ILocal, IPhoneLittle, ISupport, ITelegram, IWebSite} from "../../assets/icons";

export const AboutInfo = () => {
    return (
        <div className={cl.wrapperAboutInfo}>
            <div className={cl.wrappInfo}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A687e7933e0e492a0b9b61f660eb023b3354804b2ad26df7504960e7b393bdd30&amp;source=constructor"
                    height="240" frameBorder="0">
                </iframe>
                <div className={cl.blockInfo}>
                    <div className={cl.wrappIcon}>
                        <ILocal/>
                        <TextInfo firstTitle={'Адрес:'} secondTitle={'ул.Профсоюзная 26'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <ITelegram/>
                        <TextInfo firstTitle={'Телеграм: '} secondTitle={'@bazzarish'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <ISupport/>
                        <TextInfo firstTitle={'Тех. поддержка:'} secondTitle={'@bazzar_x_fiery'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


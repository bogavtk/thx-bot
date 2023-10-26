import React from 'react';
import cl from './AboutInfo.module.css'
import frame from '../../assets/Frame.png'
import {BlockText} from "../../components/BlockText/BlockText";

export const AboutInfo = () => {
    return (
        <div className={cl.wrapperAboutInfo}>
            <div className={cl.wrappInfo}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aad8b70531ab4b7c9294e67c981d072204813e1cc65f9eb053987b17ec7bc1ed7&amp;source=constructor"
                    height="240" frameBorder="0">

                </iframe>
                <div className={cl.blockInfo}>
                    <div className={cl.wrappIcon}>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.00033 7.00004C5.26699 7.00004 4.66699 6.40004 4.66699 5.66671C4.66699 4.93337 5.26699 4.33337 6.00033 4.33337C6.73366 4.33337 7.33366 4.93337 7.33366 5.66671C7.33366 6.40004 6.73366 7.00004 6.00033 7.00004ZM10.0003 5.80004C10.0003 3.38004 8.23366 1.66671 6.00033 1.66671C3.76699 1.66671 2.00033 3.38004 2.00033 5.80004C2.00033 7.36004 3.30033 9.42671 6.00033 11.8934C8.70033 9.42671 10.0003 7.36004 10.0003 5.80004ZM6.00033 0.333374C8.80033 0.333374 11.3337 2.48004 11.3337 5.80004C11.3337 8.01337 9.55366 10.6334 6.00033 13.6667C2.44699 10.6334 0.666992 8.01337 0.666992 5.80004C0.666992 2.48004 3.20033 0.333374 6.00033 0.333374Z"
                                fill="#037EE5"/>
                        </svg>
                        <BlockText firstTitle={'Адрес: '} secondTitle={'ул.Петербургская, 1, Казань'}/>
                    </div>

                    <div className={cl.block}>
                        <div className={cl.twoWrappInfo}>
                            <div className={cl.wrappIcon}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.8981 8.90375L8.95376 7.58437L8.94563 7.58062C8.79278 7.51524 8.62603 7.48901 8.46049 7.50428C8.29494 7.51956 8.13581 7.57587 7.99751 7.66812C7.98122 7.67888 7.96557 7.69056 7.95063 7.70312L6.42938 9C5.46563 8.53187 4.47063 7.54437 4.00251 6.59312L5.30126 5.04875C5.31376 5.03312 5.32563 5.0175 5.33688 5.00062C5.42715 4.86268 5.48192 4.70457 5.49631 4.54035C5.5107 4.37614 5.48428 4.21091 5.41938 4.05937V4.05187L4.09626 1.1025C4.01047 0.904536 3.86296 0.73963 3.67575 0.632395C3.48854 0.525159 3.27166 0.481346 3.05751 0.507496C2.21061 0.618937 1.43324 1.03485 0.870589 1.67756C0.307935 2.32026 -0.00152558 3.1458 5.6554e-06 4C5.6554e-06 8.9625 4.03751 13 9.00001 13C9.8542 13.0015 10.6797 12.6921 11.3224 12.1294C11.9651 11.5668 12.3811 10.7894 12.4925 9.9425C12.5187 9.72841 12.475 9.51159 12.3679 9.32439C12.2607 9.13719 12.096 8.98963 11.8981 8.90375ZM9.00001 12C6.87898 11.9977 4.8455 11.1541 3.34571 9.65429C1.84592 8.1545 1.00232 6.12102 1.00001 4C0.997654 3.38968 1.21754 2.79937 1.61859 2.33931C2.01964 1.87926 2.57444 1.58091 3.17938 1.5C3.17913 1.50249 3.17913 1.505 3.17938 1.5075L4.49188 4.445L3.20001 5.99125C3.18689 6.00633 3.17498 6.02242 3.16438 6.03937C3.07033 6.18369 3.01515 6.34987 3.0042 6.52178C2.99325 6.6937 3.0269 6.86553 3.10188 7.02062C3.66813 8.17875 4.83501 9.33687 6.00563 9.9025C6.16186 9.97678 6.33468 10.0093 6.50722 9.99677C6.67976 9.98428 6.8461 9.92725 6.99001 9.83125C7.00605 9.82044 7.02149 9.80875 7.03626 9.79625L8.55563 8.5L11.4931 9.81562H11.5C11.4201 10.4214 11.1222 10.9773 10.662 11.3794C10.2019 11.7814 9.61104 12.0021 9.00001 12Z"
                                        fill="#037EE5"/>
                                </svg>
                                <BlockText firstTitle={'Телефон: '} secondTitle={'+7 (939) 379 20 63'}/>
                            </div>
                            <div className={cl.wrappIcon}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0ZM11 4.32C10.9097 4.61564 10.7595 4.88954 10.5588 5.12466C10.3581 5.35977 10.1111 5.55108 9.83333 5.68667C9.68533 5.131 9.41184 4.61669 9.03391 4.18328C8.65598 3.74988 8.18368 3.40893 7.65333 3.18667C7.73965 2.89086 7.92575 2.63409 8.18 2.46C7.89333 2.27333 7.51333 2.18 7.28667 2.50667C6.93333 2.96667 7.28667 3.58 7.42667 3.84V3.93333C7.05651 3.70882 6.76709 3.37271 6.6 2.97333C5.95583 2.95265 5.31865 3.11194 4.76 3.43333C4.70201 3.05693 4.73867 2.67202 4.86667 2.31333C5.10741 2.33631 5.3501 2.29968 5.57333 2.20667C5.79656 2.11365 5.99347 1.96712 6.14667 1.78C6.45333 1.43333 6.06 0.993333 5.75333 0.726667H5.99333C6.90093 0.720545 7.79455 0.950267 8.58667 1.39333C9.03439 1.72423 9.40259 2.15092 9.66441 2.64225C9.92622 3.13358 10.075 3.67716 10.1 4.23333C10.26 4.23333 10.5667 3.86667 10.7067 3.62C10.8213 3.846 10.9193 4.08 11 4.32ZM6 11.2267C4.63333 9.84 6.16667 8.72667 5.33333 7.73333C4.72 7.16667 3.80667 7.56 3.26 6.91333C3.16772 6.43124 3.20761 5.93316 3.37545 5.4719C3.54329 5.01064 3.83281 4.60339 4.21333 4.29333C4.56 4 6.88 3.62667 7.82667 4.44C8.38036 4.91689 8.76988 5.55599 8.94 6.26667C9.24594 6.28978 9.55193 6.22255 9.82 6.07333C10.0933 8.06 7.72 10.5667 6 11.2267ZM3.43333 1.39333C3.68812 1.29619 3.96801 1.28671 4.22879 1.3664C4.48956 1.44608 4.71635 1.61037 4.87333 1.83333C4.59333 2.08667 4.24667 2.25333 3.87333 2.31333C3.88712 2.11703 3.9298 1.92384 4 1.74L3.43333 1.39333Z"
                                        fill="#037EE5"/>
                                </svg>
                                <BlockText firstTitle={'Вебсайт: '} secondTitle={'messaeres.tilda.ws'}/>
                            </div>
                        </div>

                        <div className={cl.twoWrappInfo}>
                            <div className={cl.wrappIcon}>
                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0348 -0.0019785C11.8743 0.00969937 11.7168 0.0473557 11.5683 0.109521H11.5663C11.4238 0.166021 10.7463 0.451021 9.71632 0.883021L6.02531 2.43752C3.37681 3.55252 0.773315 4.65052 0.773315 4.65052L0.804315 4.63852C0.804315 4.63852 0.624815 4.69752 0.437315 4.82602C0.321479 4.89973 0.221802 4.99618 0.144315 5.10952C0.0523152 5.24452 -0.0216848 5.45102 0.00581522 5.66452C0.0508152 6.02552 0.284815 6.24202 0.452815 6.36152C0.622815 6.48252 0.784815 6.53902 0.784815 6.53902H0.788815L3.23032 7.36152C3.33982 7.71302 3.97431 9.79902 4.12681 10.2795C4.21681 10.5665 4.30432 10.746 4.41382 10.883C4.46681 10.953 4.52881 11.0115 4.60331 11.0585C4.64205 11.081 4.68334 11.0988 4.72632 11.1115L4.70131 11.1055C4.70882 11.1075 4.71482 11.1135 4.72031 11.1155C4.74031 11.121 4.75382 11.123 4.77931 11.127C5.16581 11.244 5.47632 11.004 5.47632 11.004L5.49381 10.99L6.93532 9.67752L9.35131 11.531L9.40631 11.5545C9.90981 11.7755 10.4198 11.6525 10.6893 11.4355C10.9608 11.217 11.0663 10.9375 11.0663 10.9375L11.0838 10.8925L12.9508 1.32802C13.0038 1.09202 13.0173 0.871022 12.9588 0.656522C12.8985 0.439434 12.7592 0.252725 12.5683 0.133021C12.408 0.0355789 12.2222 -0.0114542 12.0348 -0.0019785ZM11.9843 1.02302C11.9823 1.05452 11.9883 1.05102 11.9743 1.11152V1.11702L10.1248 10.582C10.1168 10.5955 10.1033 10.625 10.0663 10.6545C10.0273 10.6855 9.99632 10.705 9.83381 10.6405L6.87882 8.37502L5.09381 10.002L5.46881 7.60702L10.2968 3.10702C10.4958 2.92202 10.4293 2.88302 10.4293 2.88302C10.4433 2.65602 10.1288 2.81652 10.1288 2.81652L4.04081 6.58802L4.03882 6.57802L1.12082 5.59552V5.59352L1.11332 5.59202C1.11843 5.59032 1.12344 5.58832 1.12832 5.58602L1.14432 5.57802L1.15982 5.57252C1.15982 5.57252 3.76532 4.47452 6.41382 3.35952C7.73981 2.80102 9.07582 2.23852 10.1033 1.80452C10.7127 1.54802 11.3227 1.29302 11.9333 1.03952C11.9743 1.02352 11.9548 1.02302 11.9843 1.02302Z"
                                        fill="#037EE5"/>
                                </svg>
                                <BlockText firstTitle={'Телеграм: '} secondTitle={'@messa_eres_ai_bot'}/>
                            </div>
                            <div className={cl.wrappIcon}>
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.83333 11.6667H5.66667C4.08889 11.6667 2.75 11.1167 1.65 10.0167C0.55 8.91671 0 7.57782 0 6.00004C0 4.42226 0.55 3.08337 1.65 1.98337C2.75 0.883374 4.08889 0.333374 5.66667 0.333374C6.45555 0.333374 7.19178 0.480485 7.87533 0.774707C8.55889 1.06893 9.15889 1.47449 9.67533 1.99137C10.1918 2.50826 10.5971 3.10826 10.8913 3.79137C11.1856 4.47448 11.3329 5.21071 11.3333 6.00004C11.3333 7.48893 10.9138 8.87226 10.0747 10.15C9.23555 11.4278 8.17733 12.4278 6.9 13.15C6.78889 13.2056 6.67778 13.2363 6.56667 13.242C6.45556 13.2478 6.35556 13.2227 6.26667 13.1667C6.17778 13.1112 6.1 13.0389 6.03333 12.95C5.96667 12.8612 5.92778 12.7556 5.91667 12.6334L5.83333 11.6667ZM7.33333 11.2334C8.12222 10.5667 8.764 9.78604 9.25867 8.89137C9.75333 7.99671 10.0004 7.03293 10 6.00004C10 4.78893 9.58044 3.76404 8.74133 2.92537C7.90222 2.08671 6.87733 1.66715 5.66667 1.66671C4.45556 1.66671 3.43067 2.08626 2.592 2.92537C1.75333 3.76449 1.33378 4.78937 1.33333 6.00004C1.33333 7.21115 1.75289 8.23604 2.592 9.07471C3.43111 9.91337 4.456 10.3329 5.66667 10.3334H7.33333V11.2334ZM5.65 9.65004C5.83889 9.65004 6 9.58337 6.13333 9.45004C6.26667 9.31671 6.33333 9.1556 6.33333 8.96671C6.33333 8.77782 6.26667 8.61671 6.13333 8.48337C6 8.35004 5.83889 8.28337 5.65 8.28337C5.46111 8.28337 5.3 8.35004 5.16667 8.48337C5.03333 8.61671 4.96667 8.77782 4.96667 8.96671C4.96667 9.1556 5.03333 9.31671 5.16667 9.45004C5.3 9.58337 5.46111 9.65004 5.65 9.65004ZM4.2 4.58337C4.32222 4.63893 4.44444 4.64182 4.56667 4.59204C4.68889 4.54226 4.78889 4.4616 4.86667 4.35004C4.96667 4.21671 5.08333 4.11382 5.21667 4.04137C5.35 3.96893 5.5 3.93293 5.66667 3.93337C5.93333 3.93337 6.15 4.00826 6.31667 4.15804C6.48333 4.30782 6.56667 4.4996 6.56667 4.73337C6.56667 4.87782 6.52489 5.02226 6.44133 5.16671C6.35778 5.31115 6.21067 5.48893 6 5.70004C5.72222 5.94449 5.51667 6.17515 5.38333 6.39204C5.25 6.60893 5.18333 6.82826 5.18333 7.05004C5.18333 7.18337 5.23067 7.29737 5.32533 7.39204C5.42 7.48671 5.53378 7.53382 5.66667 7.53337C5.8 7.53337 5.91111 7.48337 6 7.38337C6.08889 7.28337 6.15556 7.16671 6.2 7.03337C6.25556 6.84449 6.35556 6.67226 6.5 6.51671C6.64444 6.36115 6.77778 6.22226 6.9 6.10004C7.13333 5.86671 7.30844 5.63337 7.42533 5.40004C7.54222 5.16671 7.60044 4.93337 7.6 4.70004C7.6 4.18893 7.42489 3.77782 7.07467 3.46671C6.72444 3.1556 6.25511 3.00004 5.66667 3.00004C5.31111 3.00004 4.98333 3.08626 4.68333 3.25871C4.38333 3.43115 4.13889 3.66715 3.95 3.96671C3.88333 4.08893 3.87489 4.20826 3.92467 4.32471C3.97444 4.44115 4.06622 4.52737 4.2 4.58337Z"
                                        fill="#037EE5"/>
                                </svg>
                                <BlockText firstTitle={'Тех. поддержка: '} secondTitle={'@messa_eres_ai_bot'}/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

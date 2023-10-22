import {NavLink} from "react-router-dom";
import cl from './BottomButton.module.css';

export const BottomButton = ({link, text}) => {
    return (
        <div className={cl.bottom_button__wrap}>
            <NavLink to={link} className={cl.bottom_button}>
                {text}
            </NavLink>
        </div>
    );
};

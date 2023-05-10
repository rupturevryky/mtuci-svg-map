import { useDispatch, useSelector } from "react-redux"
import { changeActive } from "../../app/Slices/FilterSlice"

import { Searcher } from "../Searcher/Searcher";
import icon from "../img/mtuciLogo.png"
import s from "./Header.module.css"


import { Outlet, Link } from "react-router-dom";

const Header = (props) => {

    const isActive = useSelector(state => state.filter.isActive)
    const dispatch = useDispatch()

    const onClickOut = () => {          // закрывает окно фильтра
        dispatch(changeActive())
        console.log("onClickOut");
    }

    return (
        <>
            <header className={props.s}
                onClick={(e) => {       // Функция проверяет открыто ли окно фильтра, если да, то при вызове закрывает его
                    if (isActive === true) {
                        onClickOut()
                    }
                }}>
                <nav>
                    <ul className={s.wrapper}>
                        <li>
                            <Link to="/"><img src={icon} alt="mtuci" /></Link>
                        </li>
                        <li>
                            <Link to="general-Map"><p className={s.paddingTop}>Общая карта</p></Link>
                        </li>
                        <li>
                            <a href="nan"><p className={s.paddingTop}>Telegram-Бот</p></a>
                        </li>
                        <li>
                            <Searcher />
                        </li>
                        <li>
                            <Link to="schedule"><p className={s.paddingTop}>Расписание</p></Link>
                        </li>
                        <li>
                            <Link to="favorites-audiences"><p className={s.paddingTop}>Избранные аудитории</p></Link>
                        </li>
                        <li>
                            <button>Войти</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
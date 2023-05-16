import { useDispatch } from "react-redux"
import { reboot } from "../../app/Slices/SelectBildingsSlice"

import { Searcher } from "../Searcher/Searcher";

import icon from "../img/mtuciLogo.png"
import s from "./Header.module.css"


import { Outlet, Link } from "react-router-dom";

const Header = (props) => {

    const dispatch = useDispatch
    const onClikLink = () => {      // отчищение state.enclouresCase от active positions при переходе по домену
        dispatch(reboot())
    }
    return (
        <>
            <header className={props.s}>
                <nav>
                    <ul className={s.wrapper} >
                        <li >
                            <Link to="mtuci-svg-map/"><img src={icon} alt="mtuci" /></Link>
                        </li>
                        <li>
                            <Link to="mtuci-svg-map/general-Map" onClick={onClikLink}><p className={s.paddingTop}>Общая карта</p></Link>
                        </li>
                        <li>
                            <a href="none" target="_blank"><p className={s.paddingTop}>Telegram-Бот</p></a>
                        </li>
                        <li>
                            <Searcher />
                        </li>
                        <li>
                            <Link to="mtuci-svg-map/schedule" onClick={onClikLink}><p className={s.paddingTop}>Расписание</p></Link>
                        </li>
                        <li>
                            <Link to="mtuci-svg-map/favorites-audiences" onClick={onClikLink}><p className={s.paddingTop}>Избранные аудитории</p></Link>
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
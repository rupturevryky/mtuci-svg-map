import icon from "../img/mtuciLogo.png"
import s from "./Header.module.css"

import { Outlet, Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <header className={props.s}>
                <nav>
                    <ul className={s.wrapper}>
                        <li>
                            <Link to="/"><img src={icon} alt="mtuci" /></Link>
                        </li>
                        <li>
                            <Link to="general-Map">Общая карта</Link>
                        </li>
                        <li>
                            <a href="">Telegram-Бот</a>
                        </li>
                        <li>
                            {/* <Searcher></Searcher> */}
                        </li>
                        <li>
                            <Link to="schedule">Расписание</Link>
                        </li>
                        <li>
                            <Link to="favorites-audiences">Избранные аудитории</Link>
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
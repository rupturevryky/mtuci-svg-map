import { Searcher } from "../Searcher/Searcher";
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
import { Link } from "react-router-dom";

import s from "./DialogSearcherItem.module.css";

const DialogSearcherItem = ({ title, color, id, active, blure, onMouseEnter, onMouseLeave, onClick }) => {

    return (
        <Link
            to={`/${title.replace(' ', '_')}`}
            className={s.li}
            id={id}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >

            <li>{title}</li>
            <div className={s.color_line}
                style={{ backgroundColor: active === true || blure === true ? color : "#fff" }}>
            </div>

        </Link>
    )
}

export default DialogSearcherItem;


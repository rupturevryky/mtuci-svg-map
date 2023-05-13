import { Link } from "react-router-dom";

import s from "./DialogSearcherItem.module.css";

const DialogSearcherItem = ({ title, color, id, onMouseEnter, onMouseLeave, onClick }) => {

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
                style={{ backgroundColor: color }}>
            </div>

        </Link>
    )
}

export default DialogSearcherItem;
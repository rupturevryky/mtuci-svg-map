import s from "./EnclosuresListItem.module.css"

const EnclosuresListItem = ({ title, active, color, onClick }) => {

    const item = () => {
        if (active === false) {
            return (
                <div className={s.string}>
                    <div className={s.circle}></div><p>{title}</p>
                </div>
            )
        } else {
            return (
                <div className={s.string}>
                    <div className={s.circle} style={{ backgroundColor: color }}></div><p>{title}</p>
                </div>
            )
        }
    }

    return (
        <li onClick={onClick} className={s.highlight} >
            {item()}
        </li>
    );
}

export default EnclosuresListItem;
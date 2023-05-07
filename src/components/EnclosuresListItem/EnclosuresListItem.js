import s from "./EnclosuresListItem.module.css"

const EnclosuresListItem = ({ title, active, blure, color, id, onClick, onMouseEnter, onMouseLeave }) => {

    const item = () => {

        const padding = (id) => id === 1 ? `${s.string} ${s.padding}` : `${s.string}`
        const light = () => `${s.string} ${s.padding}`

        if (active === false) {
            if (blure === true) {
                return (
                    <div className={padding(id)}>
                        <div className={s.circle}></div><p>{title}</p>
                    </div>
                )
            } else {
                return (
                    <div className={padding(id)}>
                        <div className={s.circle}></div><p>{title}</p>
                    </div>
                )
            }
        } else {
            return (
                <div className={padding(id)}>
                    <div className={s.circle} style={{ backgroundColor: color }}></div><p>{title}</p>
                </div>
            )
        }
    }

    return (
        <li className={`${s.highlight} ${s.item}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {item()}
        </li>
    );
}

export default EnclosuresListItem;
import s from "./EnclosuresListItem.module.css"

const EnclosuresListItem = ({ title, active, blure, color, id, onClick, onMouseEnter, onMouseLeave }) => {

    const item = () => {

        const padding = () => id === 1 ? `${s.string} ${s.padding}` : `${s.string}`

        if (active === false) {
            if (blure === true) {
                return (
                    <div className={padding()}>
                        <div className={s.circle} style={{ backgroundColor: color }}></div><p>{title}</p>
                    </div>
                )
            } else {
                return (
                    <div className={padding()}>
                        <div className={s.circle}></div><p>{title}</p>
                    </div>
                )
            }
        } else {
            return (
                <div className={padding()}>
                    <div className={s.circle} style={{ backgroundColor: color }}></div><p>{title}</p>
                </div>

            )
        }
    }

    const clip = () => active === true ? `${s.сlip}` : `${s.displayNone}`
    const marginClip = () => id === 1 ? `${s.margin} ${clip()}` : `${clip()}`

    return (
        <li className={`${s.highlight} ${s.item}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {item()}
            <div className={marginClip()} style={{ backgroundColor: color }}></div>
        </li>
    );
}

export default EnclosuresListItem;
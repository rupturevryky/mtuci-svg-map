import { useSelector, useDispatch } from 'react-redux';
import { selectBilding } from "../../app/Slice/SelectBildingsSlice"
import s from "./EnclosuresListItem.module.css"

const EnclosuresListItem = () => {

    const bildings = useSelector(state => state.enclouresCase);

    const dispatch = useDispatch();

    const enclosures = (e) => {
        const id = e.target.id
        dispatch(selectBilding(id))
        console.log(bildings)
    }

    const bildingsList = bildings.map((bilding) => {
        if (bilding.active === false) {
            return (
                <>
                    <li
                        key={bilding.id}
                        id={bilding.id}
                        onClick={enclosures}
                        className={s.string}><div className={s.circle}></div><p>{bilding.title}</p>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li
                        key={bilding.id}
                        id={bilding.id}
                        onClick={enclosures}
                        className={s.string}><div className={s.circle} style={{ backgroundColor: bilding.color }}></div><p>{bilding.title}</p>
                    </li>
                </>
            )
        }
    }
    );

    return (
        <ul style={{ marginTop: 67 }}>
            {bildingsList}
        </ul>
    );
}

export default EnclosuresListItem;
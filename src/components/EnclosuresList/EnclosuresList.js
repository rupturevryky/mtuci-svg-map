import { useSelector, useDispatch } from 'react-redux';

import { selectBilding, blureTrue, blureFalse } from "../../app/Slice/SelectBildingsSlice"
import EnclosuresListItem from "../EnclosuresListItem/EnclosuresListItem";
import s from "./EnclosureList.module.css"


export const EnclosuresList = () => {

    const dispatch = useDispatch();



    const bildings = useSelector(state => state.enclouresCase);

    const layle = bildings.map(({ id, ...props }) => {

        const enclosures = (id) => {
            dispatch(selectBilding(id))
            console.log(`enclosures!!! id = ${id}`)
        }
        const onMouseEnter = (id) => {
            if (props.active === false) {
                dispatch(blureTrue(id))
                console.log(`enclosures!!! id = ${id}`)
            }
        }
        const onMouseLeave = (id) => {
            if (props.active === false) {
                dispatch(blureFalse(id))
                console.log(`enclosures!!! id = ${id}`)
            }
        }
        return (
            <EnclosuresListItem
                {...props} key={id} id={id}
                onClick={() => enclosures(id)}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={() => onMouseLeave(id)}
            />
        )

    });

    return (
        <div className={s.listWrapper}>
            <ul className={s.listInner}>
                {layle}
            </ul>
        </div>


    )


}
export default EnclosuresList;
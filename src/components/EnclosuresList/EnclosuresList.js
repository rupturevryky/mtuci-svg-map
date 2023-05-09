import { useSelector, useDispatch } from 'react-redux';

import { selectBilding, blureTrue, blureFalse, blureAll } from "../../app/Slices/SelectBildingsSlice"
import EnclosuresListItem from "../EnclosuresListItem/EnclosuresListItem";
import s from "./EnclosureList.module.css"


const EnclosuresList = () => {

    const dispatch = useDispatch();
    const bildings = useSelector(state => state.enclouresCase.enclouresCase);

    const layle = bildings.map(({ id, ...props }) => {

        const onClick = (id) => {
            dispatch(selectBilding(id))
            console.log(`onClick id = ${id}`)
            if (bildings.filter(item => item.active === false).length === 6) {
                dispatch(blureTrue(id))
            }
        }
        const onMouseEnter = (id) => {
            if (props.active === false) {
                dispatch(blureTrue(id))
                console.log(`onMouseEnter!!! id = ${id}`)
            }
        }
        const onMouseLeave = (id) => {
            if (props.active === false) {
                dispatch(blureFalse(id))
                console.log(`onMouseLeave!!! id = ${id}`)
            }
        }

        return (
            <EnclosuresListItem
                {...props} key={id} id={id}
                onClick={() => onClick(id)}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={() => onMouseLeave(id)}
            />
        )

    });

    const onMouseLeaveAll = () => {
        let check = false;
        if (bildings.filter(item => item.active === false).length === bildings.length) {
            check = true;
        }
        if (check === true) {
            dispatch(blureAll())
            console.log(`onMouseLeaveAll`)
        }

    }

    return (
        <div className={s.listWrapper}
            onMouseLeave={onMouseLeaveAll}>
            <ul className={s.listInner}>
                {layle}
            </ul>
        </div>


    )
}
export default EnclosuresList;
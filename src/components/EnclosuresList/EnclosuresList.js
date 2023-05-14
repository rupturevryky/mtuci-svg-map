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
            if (bildings.filter(item => item.active === false).length === bildings.length) {
                dispatch(blureTrue(id))
            }
        }

        const onMouse = (id, action) => {

            if (props.active === false) {
                dispatch(action(id))

                if (action === blureFalse && bildings.filter(item => item.active === false).length === bildings.length) {
                    dispatch(blureAll())
                }
            }
        }

        return (
            <EnclosuresListItem
                {...props} key={id} id={id}
                onClick={() => onClick(id)}
                onMouseEnter={() => onMouse(id, blureTrue)}
                onMouseLeave={() => onMouse(id, blureFalse)}
            />
        )

    });

    const onMouseLeaveAll = () => {
        if (bildings.filter(item => item.active === false).length === bildings.length) {
            dispatch(blureAll())
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
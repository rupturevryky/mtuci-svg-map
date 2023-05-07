import { useSelector, useDispatch } from 'react-redux';

// import { createSelector } from 'reselect';
import { selectBilding } from "../../app/Slice/SelectBildingsSlice"
import EnclosuresListItem from "../EnclosuresListItem/EnclosuresListItem";
// import s from "./EnclosureList.module.css"


export const EnclosuresList = () => {

    const dispatch = useDispatch();



    const bildings = useSelector(state => state.enclouresCase);

    const layle = bildings.map(({ id, ...props }) => {

        const enclosures = (id) => {
            dispatch(selectBilding(id))
            console.log(`enclosures!!! id = ${id}`)
        }
        return (
            <EnclosuresListItem
                {...props} key={id}
                onClick={() => enclosures(id)}
            />
        )

    });

    return (
        <ul style={{ marginTop: 67 }}>
            {layle}
        </ul>

    )


}
export default EnclosuresList;
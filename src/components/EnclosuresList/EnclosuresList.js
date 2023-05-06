import { useSelector } from 'react-redux';

// import { createSelector } from 'reselect';
// import { selectBilding } from "../../app/Slice/SelectBildingsSlice"

import EnclosuresListItem from "../EnclosuresListItem/EnclosuresListItem";
// import s from "./EnclosureList.module.css"


export const EnclosuresList = () => {

    const bildings = useSelector(state => state.enclouresCase);

    return (
        <EnclosuresListItem
            props={bildings}
        />
    )


}
export default EnclosuresList;
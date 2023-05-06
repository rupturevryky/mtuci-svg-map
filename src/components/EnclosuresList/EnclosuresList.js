import { useDispatch, useSelector } from 'react-redux';
// import { createSelector } from 'reselect';
import { selectBilding } from "../../app/Slice/SelectBildingsSlice"

export const EnclosuresList = () => {

    const bildings = useSelector(state => state.enclouresCase);

    const bildingsList = bildings.map((bilding) => {
        return (
            <>
                <li><div style={``}></div><p styleList={``}>{bilding.title}</p></li>
                <div>hello</div>
            </>

        )
    });

    return (
        <ul>
            {bildingsList}
        </ul>
    );
}
export default EnclosuresList;
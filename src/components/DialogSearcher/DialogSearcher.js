import { useDispatch, useSelector } from "react-redux"
import { fullList, changeActive } from "../../app/Slices/FilterSlice"

import s from "./DialogSearcher.module.css"

export const DialogSearcher = () => {

    const filter = useSelector(state => state.filter.filter)
    const isActive = useSelector(state => state.filter.isActive)
    const bildings = useSelector(state => state.enclouresCase.enclouresCase)
    const dispatch = useDispatch()

    const fullLayle = [];
    bildings.forEach(item => {
        fullLayle.push(item.title)
    })
    const layle = () => filter.map(item => <li key={item}>{item}</li>)

    const onClickOut = () => {
        dispatch(changeActive())
        console.log("onClickOut");
    }

    if (isActive === true) {
        return (
            <div
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        onClickOut()
                    }
                }}
                className={s.background}>
                <ul className={s.dialog}>
                    <input
                        autoFocus
                        placeholder="Поиск кабинета"
                        type="text" onClick={onclick}></input>
                    {layle()}
                </ul>
            </div>

        )
    }

}
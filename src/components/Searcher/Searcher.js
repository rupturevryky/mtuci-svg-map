import { useDispatch, useSelector } from "react-redux"
import { fullList, changeActive } from "../../app/Slices/FilterSlice"

import s from "./Searcher.module.css"
import search from "../svg/Search.svg";

export const Searcher = () => {

    const filter = useSelector(state => state.filter.filter)
    const isActive = useSelector(state => state.filter.isActive)
    const bildings = useSelector(state => state.enclouresCase.enclouresCase)
    const dispatch = useDispatch()

    const fullLayle = [];
    bildings.forEach(item => {
        fullLayle.push(item.title)
    })

    const layle = () => filter.map(item => <li key={item}>{item}</li>)

    const mainBlock = () => {

        const onclickIn = (block) => {
            dispatch(fullList(fullLayle))
            dispatch(changeActive())
            console.log("click");
        }
        if (isActive === false) {
            return (
                <div className={s.search}
                    onClick={(e) => onclickIn(e.currentTarget)}>
                    <img src={search} alt="" /><p>Поиск кабинета</p>
                </div>
            )
        } else {
            return (
                <dialog open>
                    <ul>
                        <input type="text" onClick={onclick}></input>
                        {layle()}
                    </ul>
                </dialog>
            )
        }
    }


    return (
        <>
            {mainBlock()}
        </>

    )
}
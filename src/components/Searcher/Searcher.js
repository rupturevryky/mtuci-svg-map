import { useDispatch, useSelector } from "react-redux"
import { changeFilterList, changeActive } from "../../app/Slices/FilterSlice"

import s from "./Searcher.module.css"
import search from "../svg/Search.svg";

export const Searcher = () => {

    const isActive = useSelector(state => state.filter.isActive)
    const bildings = useSelector(state => state.enclouresCase.enclouresCase)
    const dispatch = useDispatch()

    const fullLayle = [];
    bildings.forEach(item => {
        fullLayle.push(item.title)
    })

    const onclickIn = () => {
        dispatch(changeFilterList(fullLayle))
        dispatch(changeActive())
    }

    if (isActive === false) {
        return (
            <div className={s.search}
                onClick={onclickIn}>
                <img src={search} alt="" /><p>Поиск корпуса</p>
            </div>
        )
    } else {
        return (
            <div className={s.ofline}></div>
        )
    }
}
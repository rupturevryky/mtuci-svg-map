import { useDispatch, useSelector } from "react-redux"
import { changeActive, changeFilterList } from "../../app/Slices/FilterSlice"
import { blureTrue, blureFalse, blureAll, reboot } from "../../app/Slices/SelectBildingsSlice"


import DialogSearcherItem from "../DialogSearcherItem/DialogSearcherItem"
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

    const onMouse = (id, action) => {

        if (bildings[id - 1].active === false) {
            dispatch(action(id))

            if (action === blureFalse && bildings.filter(item => item.active === false).length === bildings.length) {
                dispatch(blureAll())
            }
        }
    }

    const onClickOut = () => {
        dispatch(changeActive())
    }

    const onClikLink = () => {
        dispatch(changeActive())
        dispatch(reboot())
    }

    const filteredLayle = (text) => {
        if (filter.length === 0 || text.length === 0) {
            dispatch(changeFilterList(fullLayle))       // фильтр обновляется на полный
        }
        let newList = fullLayle.filter(li => li.toLowerCase().indexOf(text.toLowerCase()) > -1)
        dispatch(changeFilterList(newList))
    }

    const layle = filter.length !== 0 ?

        bildings.map(({ id, ...props }) => {

            if (filter.includes(props.title) === true) {

                return (
                    <DialogSearcherItem
                        {...props} key={id} id={id}
                        onMouseEnter={() => onMouse(id, blureTrue)}
                        onMouseLeave={() => onMouse(id, blureFalse)}
                        onClick={onClikLink}
                    />)
            }
        }) : <li className={s.li}>Ничего не найдено</li>

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
                        type="text" onClick={onclick}
                        onInput={(e) => filteredLayle(e.target.value)}>
                    </input>
                    {layle}
                </ul>
            </div>
        )
    }
}
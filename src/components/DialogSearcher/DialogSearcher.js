import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { changeActive, changeFilterList } from "../../app/Slices/FilterSlice"
import { blureTrue, blureFalse, blureAll } from "../../app/Slices/SelectBildingsSlice"

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

    let layle = () => {
        if (filter.length !== 0) {
            return filter.map(item => <Link
                to={`/${item.replace(' ', '_')}`}
                className={s.li}
                key={item}
                id={item}
                onMouseEnter={(e) => (onMouse(e.currentTarget.id, blureTrue))}
                onMouseLeave={e => onMouse(e.currentTarget.id, blureFalse)}
                onClick={onClickOut}
            >

                <li>{item}</li><div className={s.color_line}></div>

            </Link>)

        } else {
            return <li className={s.li}>Ничего не найдено</li>
        }
    }

    const onMouse = (id, action) => {
        let quest;

        for (let bilding of bildings) {
            if (bilding.title === id) {
                debugger
                quest = bilding.id
                break
            }
        }
        if (bildings[quest - 1].active === false) {
            console.log(quest);
            dispatch(action(quest))
            if (action === blureTrue) {
                console.log(`MouseEnter id-${quest}`);
            } else {
                onMouseLeaveAll()
                console.log(`MouseLeave id-${quest}`);
            }
        }
    }

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

    const onClickOut = () => {
        dispatch(changeActive())
        onMouseLeaveAll()
        console.log("onClickOut");
    }

    const filteredLayle = (text) => {
        if (filter.length === 0 || text.length === 0) {
            dispatch(changeFilterList(fullLayle))       // фильтр обновляется на полный
        }
        let newList = fullLayle.filter(li => li.toLowerCase().indexOf(text.toLowerCase()) > -1)
        dispatch(changeFilterList(newList))
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
                        type="text" onClick={onclick}
                        onInput={(e) => filteredLayle(e.target.value)}></input>
                    {layle()}
                </ul>
            </div>
        )
    }
}
import SvgMtuciList from "../SvgMtuciList/SvgMtuciList";
import EnclosuresList from "../EnclosuresList/EnclosuresList";
import s from "./home.module.css";

export const Home = () => {

    return (
        <div className={s.block}>
            <SvgMtuciList />
            <EnclosuresList className={s.list} />
        </div>
    );
};
// import SvgMtuciList from "../SvgMtuciList/SvgMtuciList";
import { SvgMtuciItems } from "../SvgMtuciItems/SvgMtuciItems";
import EnclosuresList from "../EnclosuresList/EnclosuresList";
import { DialogSearcher } from "../DialogSearcher/DialogSearcher";
import s from "./home.module.css";

export const Home = () => {

    return (
        <div className={s.block}>
            <DialogSearcher />
            <SvgMtuciItems />
            <EnclosuresList className={s.list} />
        </div>
    );
};
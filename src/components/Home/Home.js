import React from "react"
import SvgMtuci from "../SvgMtuci/SvgMtuci";
import EnclosuresList from "../EnclosuresList/EnclosuresList";
import s from "./home.module.css";

export const Home = () => {
    return (
        <div className={s.block}>
            <SvgMtuci />
            <EnclosuresList className={s.list} />
        </div>
    );
};
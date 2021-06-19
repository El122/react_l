import preloader from "../assets/preloader.svg";
import s from "./style.module.css";

const Preloader = () => {
    return <div className={s.preloader}><img src={preloader} alt="." /></div>;
}

export { Preloader };
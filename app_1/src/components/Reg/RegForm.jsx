import React from "react";
import { NavLink } from "react-router-dom";
import s from "./auth.module.css";

const RegForm = (props) => {
    let loginElem = React.createRef();
    let fioElem = React.createRef();
    let birthdayElem = React.createRef();
    let passElem = React.createRef();
    let pass2Elem = React.createRef();

    const onLoginChange = () => {
        let text = loginElem.current.value;
        props.onLoginChange(text);
    }
    const onFioChange = () => {
        let text = fioElem.current.value;
        props.onFioChange(text);
    }
    const onBirthdayChange = () => {
        let text = birthdayElem.current.value;
        props.onBirthdayChange(text);
    }
    const onPassChange = () => {
        let text = passElem.current.value;
        props.onPassChange(text);
    }
    const onPass2Change = () => {
        let text = pass2Elem.current.value;
        props.onPass2Change(text);
    }

    return (
        <>
            <div className={s.authPage}></div>
            <div className={s.authPage}>
                <form className={s.authForm} method="POST" onSubmit={props.regUser}>
                    <h2 className="mb-4">Регистрация</h2>
                    <label htmlFor="userLogin" className="form-label mb-4">Логин<br />
                        <input type="text" className="form-control" id="userLogin" placeholder="Логин" value={props.u_login} ref={loginElem} onChange={onLoginChange} name="userLogin" />
                    </label>
                    <label htmlFor="userFio" className="form-label mb-4">ФИО<br />
                        <input type="text" className="form-control" id="userFio" placeholder="ФИО" value={props.u_fio} ref={fioElem} onChange={onFioChange} name="userFio" />
                    </label>
                    <label htmlFor="userBirthday" className="form-label mb-4">Дата рождения<br />
                        <input type="date" className="form-control" id="userBirthday" placeholder="Дата рождения" value={props.userBirthday} ref={birthdayElem} onChange={onBirthdayChange} name="userBirthday" />
                    </label>
                    <label htmlFor="userPass" className="form-label mb-4">Пароль<br />
                        <input type="password" className="form-control" id="userPass" placeholder="Пароль" value={props.u_pass} ref={passElem} onChange={onPassChange} name="userPass" />
                    </label>
                    <label htmlFor="userPass2" className="form-label mb-4">Повторите пароль<br />
                        <input type="password" className="form-control" id="userPass2" placeholder="Повторите пароль" value={props.u_pass2} ref={pass2Elem} onChange={onPass2Change} name="userPass" />
                    </label>
                    <button className="btn btn-light">Войти</button>
                </form>
                <NavLink exact to="/login" className={s.changeFormPage}>Уже зарегистрированы?</NavLink>
            </div>
        </>
    )
}

export { RegForm };
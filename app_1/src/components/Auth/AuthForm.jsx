import React from "react";
import { NavLink } from "react-router-dom";
import s from "./auth.module.css";

const AuthForm = (props) => {
    let loginElem = React.createRef();
    let passElem = React.createRef();

    let onLoginChange = () => {
        let loginText = loginElem.current.value;
        props.onLoginFieldChange(loginText);
    }
    let onPassChange = () => {
        let passText = passElem.current.value;
        props.onPassFieldChange(passText);
    }

    return (
        <>
            <div className={s.authPage}></div>
            <div className={s.authPage}>
                <form className={s.authForm} method="POST" onSubmit={props.checkAuth}>
                    <h2 className="mb-4">Авторизация</h2>
                    <label htmlFor="userLogin" className="form-label mb-4">Логин<br />
                        <input type="text" className="form-control" id="userLogin" placeholder="Логин" value={props.u_login} ref={loginElem} onChange={onLoginChange} name="userLogin" />
                    </label>
                    <label htmlFor="userPass" className="form-label mb-4">Пароль<br />
                        <input type="password" className="form-control" id="userPass" placeholder="Пароль" value={props.u_pass} ref={passElem} onChange={onPassChange} name="userPass" />
                    </label>
                    <button className="btn btn-light">Войти</button>
                </form>
                <NavLink exact to="/registration" className={s.changeFormPage}>Еще не зарегистрированы?</NavLink>
            </div>
        </>
    )
}

export { AuthForm };
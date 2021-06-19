import React, { useContext, useEffect } from 'react';
import { connect } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { AuthForm } from "./AuthForm";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";

const AuthContainerC = (props) => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { req, error, clearError } = useHttp();
    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const checkAuth = async (e) => {
        e.preventDefault();

        try {
            const data = await req("/api/auth/login", "POST", { ...props.authForm });
            auth.login(data.token, data.u_id);
        } catch (e) { }
    }

    return <AuthForm {...props} checkAuth={checkAuth} />
}

let data = (store) => ({
    authForm: { ...store.auth.userForm }
});
let func = (dispatch) => {
    return {
        onLoginFieldChange: (newLoginText) => {
            dispatch({
                type: "UPDATE_LOGIN_TEXT",
                data: newLoginText
            })
        },
        onPassFieldChange: (newPassText) => {
            dispatch({
                type: "UPDATE_PASS_TEXT",
                data: newPassText
            })
        }
    }
};

let AuthContainer = connect(data, func)(AuthContainerC);

export { AuthContainer };
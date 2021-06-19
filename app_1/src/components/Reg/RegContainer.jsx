import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RegForm } from "./RegForm";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";

const RegContainerC = (props) => {
    const message = useMessage();
    const { req, error, clearError } = useHttp();
    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const regUser = async (e) => {
        e.preventDefault();

        try {
            const data = await req("/api/auth/register", "POST", { ...props.regForm });
            message(data.message);
        } catch (e) { }
    }

    return (
        <RegForm {...props} regUser={regUser} />
    )
}

const data = (store) => ({
    regForm: store.reg.userForm
});
const func = (dispatch) => ({
    onLoginChange: (text) => {
        dispatch({
            type: "UPDATE_LOGIN_TEXT",
            data: text
        })
    },
    onFioChange: (text) => {
        dispatch({
            type: "UPDATE_FIO_TEXT",
            data: text
        })
    },
    onBirthdayChange: (text) => {
        dispatch({
            type: "UPDATE_BIRTHDAY_TEXT",
            data: text
        })
    },
    onPassChange: (text) => {
        dispatch({
            type: "UPDATE_PASS_TEXT",
            data: text
        })
    },
    onPass2Change: (text) => {
        dispatch({
            type: "UPDATE_PASS2_TEXT",
            data: text
        })
    },
});

const RegContainer = connect(data, func)(RegContainerC);

export { RegContainer };
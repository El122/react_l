import React from 'react';
import * as axios from "axios";
import { Header } from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3001/auth", { withCredentials: true })
            .then(res => {
                if (res.data.resultCode === 0) this.setUserData(res.data.data.login);
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

let data = (state) => ({
    isAuth: state.auth.isAuth,
    userLogin: state.auth.userLogin
});

let funct = (dispatch) => ({
    setUserData: (data) => {
        dispatch({
            type: "SET_USER_DATA",
            data: {
                userId: data.userID,
                userLogin: data.userLogin,
            }
        })
    },
});


export default connect(data, funct)(HeaderContainer);

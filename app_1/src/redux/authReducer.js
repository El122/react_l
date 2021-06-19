const SET_USER_DATA = "SET_USER_DATA";
const UPDATE_LOGIN_TEXT = "UPDATE_LOGIN_TEXT";
const UPDATE_PASS_TEXT = "UPDATE_PASS_TEXT";

let initialState = {
    userForm: {
        u_login: "",
        u_pass: ""
    },
    currentUser: 0,
    isFetching: false,
    isAuth: false
};

const authReducer = (data = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOGIN_TEXT:
            return {
                ...data,
                userForm: {
                    ...data.userForm,
                    u_login: action.data
                }
            };
        case UPDATE_PASS_TEXT:
            return {
                ...data,
                userForm: {
                    ...data.userForm,
                    u_pass: action.data
                }
            };
        case SET_USER_DATA:
            return {
                ...data,
                ...action.data
            };
    }
    return { ...data };
};

export { authReducer };
const UPDATE_LOGIN_TEXT = "UPDATE_LOGIN_TEXT";
const UPDATE_FIO_TEXT = "UPDATE_FIO_TEXT";
const UPDATE_BIRTHDAY_TEXT = "UPDATE_BIRTHDAY_TEXT";
const UPDATE_PASS_TEXT = "UPDATE_PASS_TEXT";
const UPDATE_PASS2_TEXT = "UPDATE_PASS2_TEXT";

let initialState = {
    userForm: {
        u_login: "",
        u_fio: "",
        u_birthday: "",
        u_pass: "",
        u_pass2: "",
    },
    isFetching: false,
};

const regReducer = (data = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOGIN_TEXT:
            return {
                ...data,
                userForm: {
                    ...data.userForm,
                    u_login: action.data
                }
            };
        case UPDATE_FIO_TEXT:
            return {
                ...data,
                userForm: {
                    ...data.userForm,
                    u_fio: action.data
                }
            };
        case UPDATE_BIRTHDAY_TEXT:
            return {
                ...data,
                userForm: {
                    ...data.userForm,
                    u_birthday: action.data
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
        case UPDATE_PASS2_TEXT:
            return {
                ...data,
                userForm: {
                    ...data.userForm,
                    u_pass2: action.data
                }
            };
    }
    return { ...data };
};

export { regReducer };
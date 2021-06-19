const FOLLOW_USER = "FOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

let usersReducer = (data = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER: {
            let dataCopy = { ...data };
            dataCopy.usersList = [...data.usersList];
            for (let user of dataCopy.usersList) {
                if (user.id === action.userID) {
                    user.isFriend = !user.isFriend;
                }
            }
            return dataCopy;
        }
        case SET_USERS: {
            let dataCopy = { ...data };
            dataCopy.usersList = [...action.users];
            dataCopy.totalUsersCount = action.totalUsersCount;
            return dataCopy;
        };
        case SET_CURRENT_PAGE: {
            let dataCopy = { ...data };
            dataCopy.currentPage = action.currentPage;
            return dataCopy;
        };
        case TOGGLE_IS_FETCHING: {
            let dataCopy = { ...data, isFetching: action.isFetching };
            return dataCopy;
        };
        default:
    }
    return data;
}

export { usersReducer };
import { connect } from "react-redux";
import { UsersPageAPIComponent } from "./UsersAPIComponent";

let data = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
}

let funct = (dispatch) => {
    return {
        followUser: (userID) => {
            dispatch({
                type: "FOLLOW_USER",
                userID: userID
            })
        },
        setUsersData: (usersData) => {
            dispatch({
                type: "SET_USERS",
                users: usersData.data.usersList,
                totalUsersCount: usersData.data.totalCount
            });
        },
        setCurrentPage: (page) => {
            dispatch({
                type: "SET_CURRENT_PAGE",
                currentPage: page,
            });
        },
        toggleIsFetching: (isFetching) => {
            dispatch({
                type: "TOGGLE_IS_FETCHING",
                isFetching: isFetching,
            });
        }
    };
}

const UsersContainer = connect(data, funct)(UsersPageAPIComponent);

export { UsersContainer };
import React from 'react';
import * as axios from "axios";
import { UsersPage } from "./UsersPage";
import { Preloader } from "../Preloader";

class UsersPageAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get("http://localhost:3001/users?page=" + this.props.currentPage + "&limit=" + this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsersData(res)
            });
    };

    getAPIData = (page, pageSize) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get("http://localhost:3001/users?page=" + page + "&limit=" + pageSize)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsersData(res)
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : < UsersPage getAPIData={this.getAPIData} data={this.props} />}
            </>
        );
    }
}

export { UsersPageAPIComponent };
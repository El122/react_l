import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as axios from "axios";
import { Profile } from "./Profile"

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = this.props.currentUser; }
        axios.get(`http://localhost:3001/users/${userId}`)
            .then(res => {
                this.props.setUsersProfile(res);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUser: state.authPage.currentUser
});
let setUsersProfile = (profile) => ({
    type: "SET_USER_PROFILE",
    profile
});

export default connect(mapStateToProps, { setUsersProfile })(withRouter(ProfileContainer));
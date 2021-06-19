import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { AuthContainer } from "./components/Auth/AuthContainer";
import { RegContainer } from "./components/Reg/RegContainer";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Navbar />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/messages" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Redirect to="/profile" />
            </Switch>
        );
    } 
    return (
        <Switch>
            <Route path="/login" render={() => <AuthContainer />} />
            <Route path="/registration" render={() => <RegContainer />} />
            <Redirect to="/login" />
        </Switch>
    );
}
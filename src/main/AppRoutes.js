import React from 'react';

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Home from "../screens/home/Home";
import Login from '../screens/login/Login';
import CreateUser from "../screens/user/CreateUser";
import FindUser from "../screens/user/FindUser";
import UpdateUser from "../screens/user/UpdateUser";
import DeleteUser from "../screens/user/DeleteUser";

import { AuthConsumer } from '../main/SessionProvider';

function RestrictedRoute({ component: Component, show, ...props }) {
    return (
        <Route exact {...props} render={(componentProps) => {
            if (show) {
                return (
                    <Component {...componentProps} />
                )
            } else {
                return (
                    <Redirect to={{ pathname: '/login', state: { from: componentProps.location } }} />
                )
            }
        }} />
    )
}

function AppRoutes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Login} path="/login" />
                <Route component={CreateUser} path="/createUser" />

                <RestrictedRoute show={props.isAuthenticad} component={UpdateUser} path="/UpdateUser/:id" />
                <RestrictedRoute show={props.isAuthenticad} component={DeleteUser} path="/DeleteUser" />
                <RestrictedRoute show={props.isAuthenticad} component={FindUser} path="/FindUser" />
            </Switch>
        </BrowserRouter>
    );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <AuthConsumer>
        {(context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />)}
    </AuthConsumer>
)
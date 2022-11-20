import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../screens/home/home.js";
import Login from '../screens/login/Login';
import CreateUser from "../screens/user/CreateUser";
import FindUser from "../screens/user/FindUser";
import UpdateUser from "../screens/user/UpdateUser";
import DeleteUser from "../screens/user/DeleteUser";
import CreateAlbum from "../screens/album/CreateAlbum";
import DeleteAlbum from "../screens/album/DeleteAlbum";
import FindAlbum from "../screens/album/FindAlbum";
import UpdateAlbum from "../screens/album/UpdateAlbum";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component={ Home } path = "/exact"/>
            <Route component={ Login } path = "/login"/>
            <Route component={ CreateUser } path = "/CreateUser"/>
            <Route component={ FindUser } path = "/FindUser"/>
            <Route component={ DeleteUser } path = "/DeleteUser"/>
            <Route component={ UpdateUser } path = "/UpdateUser"/>
            <Route component={ CreateAlbum } path = "/CreateAlbum"/>
            <Route component={ DeleteAlbum } path = "/DeleteAlbum"/>
            <Route component={ FindAlbum } path = "/FindAlbum"/>
            <Route component={ UpdateAlbum } path = "/UpdateAlbum"/>
        </BrowserRouter>
    );
}
export default AppRoutes;
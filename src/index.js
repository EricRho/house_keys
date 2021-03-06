import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

// Here we are importing the ten views
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import EditUser from './components/EditUser/EditUser';
import NewUser from './components/NewUser/NewUser';
import LandingPage from './components/LandingPage/LandingPage';
import NewProfile from './components/NewProfile/NewProfile';
import NewPost from "./components/NewPost/NewPost";
import NewPostApartment from './components/NewPostApartment/NewPostApartment';
import DashboardApartments from './components/DashboardApartments/DashboardApartments';
import DashboardRoommate from './components/DashboardRoommate/DashboardRoommate';

// Here are the routes for the ten views

ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={LandingPage} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/login' component={Login} />
    <Route path='/user/edit' component={EditUser} />
    <Route path='/user/new' component={NewUser} />
    <Route path='/user/profile' component={NewProfile} />
    <Route path='/user/new/apartment' component={NewPostApartment} />
    <Route path='/user/new/post' component={NewPost} />
    <Route path='/dashboard/apartment' component={DashboardApartments} />
    <Route path='/dashboard/roommate' component={DashboardRoommate} />

  </Router>
  , document.getElementById("app"));

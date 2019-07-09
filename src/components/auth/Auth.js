import React from 'react';
import './Auth.less';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./login/Login";
import Registration from "./registration/Registration";
import ForgotPassword from "./forgot/Forgot";

const Auth = () => {
    return <Router className="auth">
        <Switch>
            <Route exact path="/auth/" component={Login}/>
            <Route path="/auth/forgot-password" component={ForgotPassword}/>
            <Route path="/auth/registration" component={Registration}/>
        </Switch>
    </Router>;
};

export default Auth;
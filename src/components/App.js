// @flow
import React, {useEffect, useState} from "react";
import "./App.less";
import LogoLoader from "../assets/loader.svg";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {apiChangeAccessToken} from "../store/api/actions";
import {fetchCurrentUserData} from "../store/user/actions";
// import Auth from "./auth/Auth";
import Home from "./home/Home";
// import Map from "./map/Map";

/** @namespace state.api.guest.defaults.headers.common */

const App = (): React.FC => {
    const [loader, setLoader]: boolean = useState(true);
    const {user} = useSelector((state): void => state);
    const dispatch = useDispatch();
    const apiChangeAccess = (): void => dispatch(apiChangeAccessToken());
    const fetchCurrentUser = (): void => dispatch(fetchCurrentUserData());

    useEffect(() => {
        const fetch = async () => {
            apiChangeAccess();
            await fetchCurrentUser();
            setLoader(false);
        };
        fetch().then();
    }, []);

    return <Router className="App">
        {loader ?
            <div className="loader-block" key="loader">
                <div className="loader">
                    <img src={LogoLoader} alt="Usso Loader"/>
                    <p>Загрузка...</p>
                </div>
            </div> :
            <Switch>
                <Route exact path="/" component={Home}/>
                {/*<Route path="/map/:id" component={Map}/>*/}
                <Route path="/auth" render={(): any => user.id ? <div>auth</div> : <div>no auth</div>}/>
            </Switch>
        }
    </Router>;
};

export default App;
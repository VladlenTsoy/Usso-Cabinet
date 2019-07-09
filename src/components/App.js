import React, {useEffect, useState} from 'react';
import './App.less';
import LogoLoader from '../assets/loader.svg';
import {useStore} from "../store/useStore";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "./auth/Auth";
import Home from "./home/Home";
import Map from "./map/Map";
import {FETCH_CURRENT_USER_DATA} from "../store/user/reducer";

/** @namespace state.api.guest.defaults.headers.common */

const App = () => {
    const [loader, setLoader]: boolean = useState(true);
    const [state, dispatch] = useStore();

    // Check EON_API_TOKEN_ACCESS for auth
    useEffect(() => {
        if (state.api.token)
            localStorage.setItem('EON_API_TOKEN_ACCESS', state.api.token);
        if (localStorage.getItem('EON_API_TOKEN_ACCESS') !== null)
            state.api.guest.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('EON_API_TOKEN_ACCESS');
    }, [state.api]);

    // Fetch current user data
    useEffect(() => {
        let dataFetch = async () => {
            try {
                const response = await state.api.user_general.get('');
                dispatch({type: FETCH_CURRENT_USER_DATA, payload: response.data});
            } catch (e) {
            }
            setLoader(false)
        };
        dataFetch().then();
    }, [dispatch, state.api]);

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
                <Route path="/map/:id" component={Map}/>
                <Route path="/auth" render={() => state.user.id ? <div>auth</div> : <Auth/>}/>
            </Switch>
        }
    </Router>
};

export default App;
import React, {useEffect, useState} from 'react';
import './App.css';
import {Icon} from "antd";
import {useStore} from "../store/useStore";
import QueueAnim from 'rc-queue-anim';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "./auth/Auth";
import {FETCH_CURRENT_USER_DATA} from "../store/user/reducer";

const App = () => {
    const [loader, setLoader]: boolean = useState(true);
    const [state, dispatch] = useStore();

    // Check EON_API_TOKEN_ACCESS for auth
    useEffect(() => {
        if (state.api.token)
            localStorage.setItem('EON_API_TOKEN_ACCESS', state.api.token);
        /** @namespace state.api.guest.defaults.headers.common */
        if (localStorage.getItem('EON_API_TOKEN_ACCESS') !== null)
            state.api.guest.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('EON_API_TOKEN_ACCESS');
    }, [state.api]);

    // Fetch language and current user data
    useEffect(() => {
        let dataFetch = async () => {
            try {
                await state.api.user_general.get('')
                    .then((response) => dispatch({type: FETCH_CURRENT_USER_DATA, payload: response.data}))
                    .finally(() => setLoader(false));
            } catch (e) {
                console.log(e);
            }
        };
        dataFetch().then();
    }, [dispatch, state.api]);

    return <Router className="App" style={{background: 'red'}}>
        <QueueAnim animConfig={{opacity: [1, 0]}}>
            {loader ?
                <div className="loader" key="loader">
                    <Icon type="loading" style={{fontSize: 24}} spin/>
                </div> :
                <Switch key="switch">
                    <Route exact path="**" render={() => state.user.id ? <div>auth</div> : <Auth/>}/>
                </Switch>
            }
        </QueueAnim>
    </Router>
};

export default App;
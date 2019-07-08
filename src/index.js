import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {LocaleProvider} from 'antd';
import ruRU from 'antd/es/locale-provider/ru_RU';
import {StoreProvider} from "./store/useStore";

ReactDOM.render(
    <LocaleProvider locale={ruRU}>
        <StoreProvider><App/></StoreProvider>
    </LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

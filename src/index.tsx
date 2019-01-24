import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './base/style.less';


const ROOT = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , ROOT);


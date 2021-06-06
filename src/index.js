import ReactDom from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import App from "./App";
import './Global.scss'


ReactDom.render(
    <div>
        <App/>
    </div>
    , document.getElementById('root'));

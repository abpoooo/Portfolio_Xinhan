import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";
import { StrictMode } from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        {/*<React.StrictMode>*/}
        <BrowserRouter>
            {/*<StrictMode>*/}


        {/*<HashRouter basename={process.env.PUBLIC_URL}>*/}
        {/*next line is for deploy*/}
        {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
        {/*    </StrictMode>*/}
            <App/>
        {/*</HashRouter>*/}
        </BrowserRouter>
        {/*</BrowserRouter>*/}
        {/*</React.StrictMode>*/}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React, { useEffect, useState } from 'react';
import App2 from './App2'
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoute from './AppRoute'
import { BrowserRouter } from "react-router-dom"
import reducer from './reducer' 
import {Provider} from 'react-redux'
import { legacy_createStore } from 'redux';

const store=legacy_createStore(reducer)


 


let r=ReactDOM.createRoot(
    document.getElementById("root"));
r.render(<>
<Provider store={store}>
    <App2/></Provider>

<BrowserRouter>
<AppRoute/>
</BrowserRouter>
</>)  




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 

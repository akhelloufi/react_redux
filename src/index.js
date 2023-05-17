
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import ChercherWithApi from './ChercherwithApi'
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer1 from './reducer';
import reducerB from './reducerB'
import App4 from './App4';
import AppBredu from './AppBredu';
import AppReduHookCompt from './AppReduHookCompt'
 
function App(){
const [T,setT]=useState([])
useEffect(()=>{
    let url="https://jsonplaceholder.typicode.com/users"
    let x=axios.get(url)
    x.then((reponse)=>{
      console.log(  reponse.data)
      let u=reponse.data
      setT(u)  
    })
},[])
    return <div>
        nombre utilisateur ={T.length}
       {T.map(
            (v,i)=><div className='u1'>
                <span>{v.id}</span>
                  <h1>{v.name}</h1>
                  <h1>{v.email}</h1>
                  <h2>{v.address.city}</h2>
                </div>

       )}
    </div>
}

//creation dun compteur  avec redux
const store =legacy_createStore(reducer1)
console.log(store.getState())

let r=ReactDOM.createRoot(
    document.getElementById("root"));
r.render(<>
<Provider store={store}>
<AppReduHookCompt  />
  
</Provider>
 
</>)  




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 

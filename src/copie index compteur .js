
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Compteur extends React.Component{
    constructor(props){
        super(props)
        this.T=[10,20,30]
        this.phrase="salam alikom"
    }
    render(){
        return <h1> {this.phrase}

           T: {this.T.map((v,indice)=>
           <button>{v}, {indice}</button>)}
        </h1>
    }
} 
/*equivalent a */
function Compteur1(props){

    let phrase="salam alikom"
    let T=[10,20,88,99]
    return <h1> {phrase}
    T: {T.map((v,indice)=><button>{v}, {indice}</button>)}
 </h1>
}
let r=ReactDOM.createRoot(
    document.getElementById("root"));
r.render(<Compteur  /> )  




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 

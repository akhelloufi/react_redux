import { useState } from "react";
import { connect } from "react-redux"

function App4(props){//component
    const [x,setx] =useState(0)
return <div style={{backgroundColor:props.color}}>
     numero  est :{props.numero}
     <input type="text" value={x} onChange=
     {(event)=>setx(event.target.value)}/>
<button onClick={()=>{
props.augmenter(x)
}}>+</button>
<button onClick={()=>{
props.diminuer(x)
}}>-</button>
</div>
}
const mapStateToprops=(state)=>{
    return {numero:state.numero,color:state.color} };

const mapDispatchToProps=(dispatch)=>{
    return {
'augmenter':
(v)=>dispatch({type:'Augmenter',payload:{valeur:parseInt(v)}})
,'diminuer':(v)=>dispatch({type:'Decrease',payload:{valeur:v}})
}
};
export default connect(mapStateToprops,mapDispatchToProps)(App4)
//ajouter propiete et methode de state
import { useState } from "react";
import { connect } from "react-redux"

function AppBredu(props){//component
    const [v,setv]=useState('')
return <> nombre  est :{props.T.length}
<input type="text"  onChange={(e)=>{setv(e.target.value)}} value={v}/>
<button onClick={()=>{
props.Ajouter(v)

}}>+ add</button>
<button onClick={()=>{
props.Supprimer(v)

}}>- delete</button>
{props.T.map((v,i)=><li>{v}</li>

)}
</>
}
const mapStateToprops=(state)=>{
    return {T:state.T} };

const mapDispatchToProps=(dispatch)=>{
    return {
'Ajouter':(vv)=>dispatch({type:'Ajouter',payload:{valeur:vv}})
,'Supprimer':(vv)=>dispatch({type:'supprimer',payload:{valeur:vv}})
}
};


 
 
export default connect(mapStateToprops,mapDispatchToProps)(AppBredu)

//ajouter propiete et methode de state
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux"

function AppReduHookCompt(props){//component
    const [x,setx] =useState(0)
    const num=useSelector(data=>data.numero)
    const dispatch=useDispatch()
    console.log(dispatch)
return <div style={{backgroundColor:props.color}}>
     numero  est :{num}
     <input type="text" value={x} onChange=
     {(event)=>setx(event.target.value)}/>
<button onClick={()=>{
    console.log('typeof='+typeof(x))
dispatch({type:'Augmenter',payload:{valeur:parseInt(x)}})
}}>+</button>
<button onClick={()=>{
dispatch({type:'Decrease',payload:{valeur:parseInt(x)}})
}}>-</button>
</div>
}
export default AppReduHookCompt
//ajouter propiete et methode de state
import React from 'react'

class Form1 extends React.Component{
constructor(props){
    super(props)
    this.state={message:''}
}/**refaire avec function */
render(){
return <form>
   taper message <input id='d1' type="text" onChange={
     (event)=>{ 
       let cequevssaisi= event.target.value;
//let cequevssaisi=dcoument.getElementById('d1').value
        this.setState({message:cequevssaisi})
     }
   }     />
<hr/>
votre message :{this.state.message}
</form>
}
}
export default Form1
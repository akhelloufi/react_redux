import React  from "react"; 
import axios from 'axios'

 export default class App extends
  React.Component{  
       constructor(props) {  
             super(props)     
        this.state = {T:[]}  
    }
    componentDidMount(){
        //composant ajouter dans le dom
        //role de useffect
        let url="https://jsonplaceholder.typicode.com/users"
        let x=axios.get(url)
        x.then((reponse)=>{
        console.log(  reponse.data)
        let u=reponse.data
        this.setState({T:u})
      })
    }
    render(){
        return <div>
         nombre utilisateur  {this.state.T.length}
         {this.state.T.map(
            (v,i)=><div className='u1' key={i}>
                <span>{v.id}</span>
                  <h1>{v.name}</h1>
                  <h1>{v.email}</h1>
                  <h2>{v.address.city}</h2>
                </div>

       )}
        </div>
    }
  }

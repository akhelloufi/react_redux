import React, { useState } from 'react'

class ChangeMessage extends React.Component{
    constructor(props){
        super(props)
        this.state={message:props.mot}
        this.timer=''
        /**<ChangeMessage mot='salut'/> */
    }
    modifier(){
        this.setState({message:this.state.message+this.props.mot})
     }
    render(){
        return <>     
        <button onClick={()=>{
            this.timer=setInterval(() => {
                this.modifier()
            }, 1000);
            }}>click</button>
            <hr/>
            <button
            onClick={
                ()=>{   clearInterval(this.timer)    }   }
            >arreter</button>
            message ={this.state.message}
        </>
    }
}

function ChangeMessageFunc(props){
const [message,setMessage]=useState('salut')
let timer=''
    return <>     
        <button onClick={()=>{
            this.timer=setInterval(() => {
                setMessage(message+' salut')
            }, 1000);
            }}>click</button>
            <hr/>
            <button
            onClick={
                ()=>{   clearInterval(timer)    }   }
            >arreter</button>
            message ={message}
        </>
}
export default ChangeMessage
import { useState } from "react"
import Livres from './Livres'
import AjouterLivres from './AjouterLivres'

let Tinit=[{id:1,titre:'abc',prix:110.00},
{id:2,titre:'bce',prix:210.00}]

export default function GestionLivres(props){
const [T,setStateT]=useState(Tinit)

    return <>
    <AjouterLivres v1={T} v2={setStateT} />
    <Livres v3={T} />
    </>
}

//<AjouterLivres v1={T}
//v2={setStateT} />{/*va ajouter nouveau livre*/}

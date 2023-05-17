function getAge(dateNaissance){
    let age=0;
    let dateAuj=new Date();
    let T=dateNaissance.split('/')
    let dt=new Date(T[2],T[1]-1,T[0])
    let diff=dateAuj-dt;
    age=Math.floor(diff/(24*3600*1000*365))
    return age;
}
function App(props){
    const nom=props.nom 
    const prenom=props.prenom
    const dateNaissance=props.dateNaissance 
    let age= getAge(dateNaissance)
    let x=new Date()
    return(<div>        
         <h2> Informations </h2>      
         <p>ici nom :{nom} prenom {prenom} 
         
         ,date de naissance ={props.dateNaissance}
        &nbsp;&nbsp;
         age{age}
         {x.toLocaleDateString()}
         </p>          
        </div>         )
}
export default App
/*<App nom="rami" prenom="ahmed" dateNaissance="23/03/2000"/>*/
import Livre from './Livre'


export default function Livres(props){
/*afficher tout les livres du tableau sous forme
de list ul li <Livre/>*/

return( <ul>
    {props.v3.map(
    (vaobjet,indice)=><li key={indice}>
        <Livre  id={vaobjet.id}
         titre={vaobjet.titre} prix={vaobjet.prix}/>
    </li>)
    }
     
</ul>)
}
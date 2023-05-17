


export default function AjouterLivres(props){
    return <form 
    onSubmit={(event)=>{alert('bien ajouter')
    event.preventDefault();
    
    let idv=document.getElementById("x1").value;
    let titrev=document.getElementById("x2").value;
    let prixv=document.getElementById("x3").value;

    ///props.v2=setStateT
    props.v2([...props.v1,
        {id:idv,titre:titrev,prix:prixv}])
    }}>
        nombre livre :{props.v1.length}<br/>
        <input type="text" id="x1" placeholder="id?" />
        <input type="text" id="x2" placeholder="titre?" />
        <input type="text" id="x3" placeholder="prix?" />
        <input type="submit" value="ajouter"/>
    </form>
}
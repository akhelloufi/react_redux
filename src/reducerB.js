
const initialState={T:[],message:''}

function reducer1(state=initialState,action){
   

switch(action.type){

   case 'Ajouter': return {...state,T:[...state.T,action.payload.valeur]}
   case 'supprimer':
      return {...state,T:state.T.filter((v)=>v!=action.payload.valeur)}
   default:
}

return state
}

export default reducer1

const initialState={numero:0,color:'yellow'}

function reducer1(state=initialState,action){
   

switch(action.type){

   case 'Augmenter': 
   return {...state,numero:state.numero+action.payload.valeur}
   case 'Decrease':
      return {...state,numero:state.numero-action.payload.valeur}
   case 'reset' :return {...state,numero:0}
   default:
}

return state
}

export default reducer1
import {actionConstants} from './action';
const initState = {
    count : 1
}
function reducer(state= initState,action){
    console.log(action)
    switch(action.type){
        case actionConstants.INCREMENT_COUNT : 
            return {
                ...state,
                count : state.count + action.payload
            }
        
        case actionConstants.DECREMENT_COUNT : 
            return {
                ...state,
                count : state.count - action.payload
            }
        
        case actionConstants.MULTIPLE_COUNT : 
            return {
                ...state,
                count : state.count * action.payload
            }
            
        case actionConstants.DVIDE_COUNT : 
            return {
                ...state,
                count : state.count / action.payload
            }    
        default :
            return state;
    }
}
export default reducer;
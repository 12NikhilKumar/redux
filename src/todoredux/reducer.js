import {actionConstants} from './action';
import axios from 'axios';
const initState = {
    todos: [
        {
            title: 'Nikhil',
            status: false,
            description: 'masai',
            id: 1
        }
    ]
}
function reducer(state = initState,action) {
    switch (action.type){
        case actionConstants.ADD_TODO : {
                const config = {
                    method: 'post',
                    url: 'http://localhost:3000/Todos',
                    data: action.payload
                }
                 axios(config)
            return {
                ...state,
                todos:[...state.todos,action.payload],
            }
        }
        case actionConstants.UPDATE_TODO :
            return {
                ...state,
                todos : state.todos.map((item)=>item.id===action.payload.id?{...item,status:!item.status}:item)
            }
        case actionConstants.DELETE_TODO : 
            return {
                ...state,
                todos : state.todos.filter((item)=>item.id !== action.payload.id)
            }
        default :{
            return state
        }          
    }
}
export default reducer;
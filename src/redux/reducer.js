import { actionConstants } from "./action";
const initState = {
    todos:[
        {
            id:1,
            status:false,
            title:"hello"
        }
    ]
}
function reducer(state = initState,action) {
    console.log(state,action)
    switch (action.type) {
        case actionConstants.ADD_TODO: {
            return {
                ...state,
                todos : [...state.todos,action.payload]
            }
        }
        case actionConstants.UPDATE_TODO: {
            return {
                ...state,
                todos: state.todos.map((item)=>item.id === action.payload.id ? {...item,status: !item.status} :item)
            };
        }
        case actionConstants.DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter((item)=>item.id !==action?.payload?.id)
            };
        }
        default: {
            return state;
        }
    }
}
export default reducer;
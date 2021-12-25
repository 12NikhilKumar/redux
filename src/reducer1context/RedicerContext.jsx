import React from 'react';
export const AppContext = React.createContext();
const initState = {
    todo : [
        {   
            id: 1,
            name : "nikhil",
            status: false,
            description: "masasi"
        }
    ]
}
const reducer = (state,action)=>{
    switch(action.type) {
        case "addTodo" : {
            return {
                ...state,
                todo : [...state.todo,action.payload]
            }
        }
        case "removeTodo" : {
            return {
                ...state,
                todo : state.todo.filter((item) => item.id !==action.payload)
            }
        }
        case "updateTodo" : {
            console.log(action.payload)
            return {
                ...state,
                todo : state.todo.map((item)=>item.id === action.payload?{...item,status : !item.status}:item)
            }
        }
        default : {
            return state
        }   
    }
}
export const AppContextProvider = ({children})=>{
    const [state,dispatch] = React.useReducer(reducer,initState);
    const value = {state,dispatch}
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}
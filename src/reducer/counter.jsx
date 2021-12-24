import React from 'react';
import {AppContext} from "../reducercontext/appcontext"
function Counter(){
    const {state,dispatch} = React.useContext(AppContext);
    const handleAdd = ()=>{
        const action = {
            type: 'increment'
        }
        dispatch(action)
    }
    const handleDecrement = ()=>{
        const action = {
            type: 'decrement'
        }
        dispatch(action)
    }
    return (
        <>
            <h1>Counter</h1>
            <h2>{state.counter}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default Counter;
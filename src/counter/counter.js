import React from 'react';
import {useDispatch} from 'react-redux'
import { decrementCount, incrementCount } from '../redux1/action';
import { useSelector } from 'react-redux';
const Counter = ()=>{
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        const action = incrementCount(1);
        dispatch(action);
    };
    const handleDecrement = ()=>{
        const action = decrementCount(1);
        dispatch(action);
    }
    const count = useSelector((state)=>state.count)
    console.log(count)
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>DecreDecrement</button>
        </div>
    )
}
export default Counter;
import React from 'react';
import {useDispatch} from 'react-redux'
import { decrementCount, divideCount, incrementCount, multiplyCount } from '../redux1/action';
import { useSelector } from 'react-redux';
import CounterProps from './counterinput';
const Counter = ()=>{
    const dispatch = useDispatch();
    const handleIncrement = (value)=>{
        const action = incrementCount(Number(value));
        dispatch(action);
    };
    const handleDecrement = (value)=>{
        const action = decrementCount(value);
        dispatch(action);
    }
    const handleMultiply = (value)=>{
        const action = multiplyCount(Number(value));
        dispatch(action);
    }
    const handleDvide = (value)=>{
        const action = divideCount(Number(value));
        dispatch(action);
    }
    const count = useSelector((state)=>state.count)
    console.log(count)
    return (
        <div>
            <CounterProps onIcrease={handleIncrement} onDecrease={handleDecrement} onMultiplay={handleMultiply} onDvide={handleDvide}/>
            <h1>Counter</h1>
            <h2>{count}</h2>
        </div>
    )
}
export default Counter;
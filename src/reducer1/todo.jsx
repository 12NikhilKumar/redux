import React from 'react';
import Todoinput from './todoinput';
import {v4 as uuid} from 'uuid';
import {AppContext} from '../reducer1context/RedicerContext'
const Todo = ()=>{
    const {state,dispatch} = React.useContext(AppContext);
    const addTodo = (todo)=>{
        todo.state.id = uuid();
        const action = {
            type: 'addTodo',
            payload: todo.state
        }
        dispatch(action)
    };
    const onUpdate = (id)=>{
        const action = {
            type: 'updateTodo',
            payload: id
        }
        dispatch(action)
    }
    const onRemove = (id)=> {
        const action = {
            type: 'removeTodo',
            payload: id
        }
        dispatch(action)
    }
    return (
        <div style={{width: '500px' ,margin: 'auto',padding: '1rem',border: '1px solid black',marginTop: '2rem',backgroundColor:'black',color:'white'}}>
            <h1 style={{textAlign:'center'}}>Todo List</h1> 
        {state.todo.map((item)=>(
            <div key = {item.id}>{item.name} : {`${item.status}`} : {item.description} <button onClick={()=>onUpdate(item.id)}>update</button> : <button onClick={()=>onRemove(item.id)}>delete</button></div>
        ))}
        <Todoinput onAdd={addTodo}/>
        </div>
    )
};
export default Todo;
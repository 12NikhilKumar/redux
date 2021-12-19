import React from 'react';
import axios from 'axios';
import {deleteTodo,updateTodo} from '../todoredux/action'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Todoprop = ({title,status,description,onDelete,onUpdate})=>{
    return (
        <div style={{display:'flex',padding:'1rem',gap:'1.5rem'}}>
            <div>{title}</div>
            <div>{`${status}`}</div>
            <div>{description}</div>
            <button onClick={()=>onDelete()}>Delete</button>
            <button onClick={()=>onUpdate()}>Update</button>
        </div>
    )
};
const TodoList = ()=>{
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        const action = deleteTodo(id)
        dispatch(action);
    }
    const handleUpdate = (id) => {
        const action = updateTodo(id)
        dispatch(action);
    }
    const todo = useSelector((state)=>state.todos)
    return (
        <div>
            {todo.map((item) =>(
                <Todoprop key={item.id}  title={item.title} status={item.status} description={item.description} onDelete={()=>handleDelete(item.id)} onUpdate={()=>handleUpdate(item.id)}/>
            ))}
        </div>
    )
}
export default TodoList
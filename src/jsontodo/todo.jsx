import { useDispatch } from "react-redux";
import { addTodo } from "../todoredux/action";
import TodoInput from "./todoinput";
import TodoList from "./todolist";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";
import React from "react"
import axios from "axios";
const Todo = ()=>{
    const dispatch = useDispatch();
    const handleAdd = ({state})=>{
        const action = addTodo({
            title : state.title,
            status : false,
            description : state.description,
            id : uuid()
        })
        dispatch(action)
    }
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        const config = {
            method : 'get',
            url : 'http://localhost:3000/Todos'
        }
        axios(config)
        .then((res)=>{
            setData([...res.data])
        })
    },[])
    return (
        <div>
            <h1>Todo</h1>
            {data.map((item)=>(
                <div>{item.title}</div>
            ))}
        </div>
    )
};
export default Todo;
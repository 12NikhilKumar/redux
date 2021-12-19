import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import { addTodo } from "../todoredux/action";
import TodoInput from "./todoinput";
import {v4 as uuid} from "uuid";
import React from "react"
import axios from "axios";
import Login from "./login";
const Todo = ()=>{
    const isAuth = useSelector((state)=>state.isAuth);
    const token = useSelector((state)=>state.token);
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
    return isAuth?(
        <div>
            <h1>Todo</h1>
            {data.map((item)=>(
                <div>{item.title}</div>
            ))}
            <TodoInput onAdd={handleAdd}/>
        </div>
    ) : (
        <Login/>
    )
};
export default Todo;
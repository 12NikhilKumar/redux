import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import TodoItem from "./todoitem";
import {v4 as uuid} from "uuid";
import TodoList from "./todolist";
function Todo(){
    const dispatch = useDispatch();
    const handleAdd = (text)=>{
        const action = addTodo({
            title: text,
            status: false,
            id: uuid()
        });
        dispatch(action);
    };
    return (
        <>
        <h1>TODO LIST</h1>
        <TodoItem onAdd={handleAdd}/>
        <TodoList/>
        </>
    )
};
export default Todo;
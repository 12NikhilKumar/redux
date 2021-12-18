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
        <div style={{width:'500px', height:'500px',backgroundColor:'teal',margin:'auto',padding:'1rem'}}>
        <h1 style={{textAlign:'center'}}>TODO LIST</h1>
        <TodoItem onAdd={handleAdd}/>
        <TodoList/>
        </div>
    )
};
export default Todo;
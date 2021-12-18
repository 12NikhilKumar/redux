import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/action";
function TodoProp({title,status,onDelete,onUpdate,id}){
    return (
        <div style={{display: 'flex',padding:'1rem',gap: '1rem'}}>
            <div>{title}</div>
            <div>{`${status}`}</div>
            <button onClick={()=>onDelete(id)}>Delete</button>
            <button onClick={()=>onUpdate(id)}>update</button>
        </div>
    );
}
function TodoList(){
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    const handleDelete = (id) =>{
        const action = deleteTodo(id)
        dispatch(action);
    }
    const handleupdate = (id) =>{
        const action = updateTodo(id);
        dispatch(action);
    }
    console.log(todos);
    return (
        <div>
        {todos.map((item)=>(
           <TodoProp key={item.id} {...item} onDelete={handleDelete} onUpdate={handleupdate}/> 
        ))}
        </div>
    )
}
export default TodoList
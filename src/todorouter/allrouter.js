import { Route } from "react-router-dom";
import Todo from "../jsontodo/todo";
import TodoInput from "../jsontodo/todoinput";
import TodoList from "../jsontodo/todolist";
const AllRoutes = ()=>{
    return (
        <>
            <Route exact path='/'>
                <Todo/>
            </Route>
            <Route exact path='/add'>
                <TodoInput/>
            </Route>
            <Route exact path='/edit'>
                <TodoList/>
            </Route>
        </>
    )
}
export default AllRoutes;
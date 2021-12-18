import React from "react";
function TodoItem({onAdd}){
    const [state,setState] = React.useState("");
    return (
        <div>
        <input value={state} onChange={ (e) => setState(e.target.value) } placeholder="add something"/>
        <button onClick={()=> {onAdd(state);setState("")}}>add</button>
        </div>
    )
}
export default TodoItem
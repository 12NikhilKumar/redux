import React from "react";
const TodoInput = ({onAdd})=>{
   const [state,setState] = React.useState({
       title: "",
       description: ""
   })
   const handleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value})
   }
   return (
       <>
        <input type="text" name="title" value={state.title} onChange={(e)=>handleChange(e)} placeholder="Title"/>
        <input type="text" name="description" value={state.description} onChange={(e)=>handleChange(e)} placeholder="Description"/>
        <button onClick={()=>onAdd({state})}>onADD</button>
       </>
   ) 
}
export default TodoInput
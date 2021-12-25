import React from 'react';
const Todoinput = ({onAdd})=>{
    const [state,setState] = React.useState({
        id: "",
        name:"",
        status:false,
        description:""
    })
    const handleChange = (e)=>{
        setState({...state,[e.target.name]:e.target.value})
    };
    return (
        <div>
            <input type="text" value={state.name} name="name" onChange={handleChange} placeholder="Enter your name"/>
            <input type="text" value={state.description} name="description" onChange={handleChange}placeholder="Enter your description"/>
            <button onClick={()=>onAdd({state})}>add Todo</button>
        </div>
    )
};
export default Todoinput;
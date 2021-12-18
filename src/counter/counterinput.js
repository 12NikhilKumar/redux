import React from "react"
const CounterProps = ({onIcrease,onDecrease,onMultiplay,onDvide})=>{
    const [state,setState] = React.useState(0);
    return(
        <div>
            <input type='number' value={state} onChange={(e)=>setState(e.target.value)} placeholder="add something" />
            <button onClick={()=>onIcrease(state)}>addition</button>
            <button onClick={()=>onDecrease(state)}>subtartct</button>
            <button onClick={()=>onMultiplay(state)}>multiplication</button>
            <button onClick={()=>onDvide(state)}>divide</button>
        </div>
    )
}
export default CounterProps
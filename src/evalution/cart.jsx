import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCart, incrementCount,decrementCount } from '../evalutionRedux/action';
const ListCart = ({id,url,name,price,quantity})=>{
    const dispatch = useDispatch();
    const handleDelete=()=>{
        const action = deleteCart(id)
        dispatch(action)
    }
    const increment=()=>{
        const action = incrementCount(id)
        dispatch(action)
    }
    const decrement=()=>{
        const action = decrementCount(id)
        dispatch(action)
    }
    return (
        <div style={{width:'600px',height:'250px',display:'flex',gap: '3rem',padding: '1rem',backgroundColor:'aqua',border:'1px solid gray',margin: 'auto',justifyContent:'center'}}>
            <div>
                <img style={{width:'100px',borderRadius:'25px'}} src={url}/>
            </div>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4>
                <div>
                    <button onClick={increment}>+</button>
                    <p>{quantity}</p>
                    <button onClick={decrement}>-</button>
                </div>
            </div>
            <button onClick={handleDelete} style={{width: '210px',height: '40px',backgroundColor:'black',color:'white'}}>remove item</button>
        </div>
    )
}
const Cart = ()=>{
    const props = useSelector((state)=>state.data);
    return (
        props.map((item)=>(
            <ListCart id={item.id} name={item.name} url={item.url} price={item.price} quantity={item.quantity}/>
        ))
    )
}
export default Cart
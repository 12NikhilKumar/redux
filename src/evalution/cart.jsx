import React from 'react';
import { useSelector } from 'react-redux';
const ListCart = ({id,url,name,price})=>{
    return (
        <div style={{width:'600px',height:'250px',display:'flex',gap: '3rem',padding: '1rem',backgroundColor:'aqua',border:'1px solid gray',margin: 'auto',justifyContent:'center'}}>
            <div>
                <img style={{width:'100px',borderRadius:'25px'}} src={url}/>
            </div>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}
const Cart = ()=>{
    const props = useSelector((state)=>state.data);
    return (
        props.map((item)=>(
            <ListCart id={item.id} name={item.name} url={item.image} price={item.price}/>
        ))
    )
}
export default Cart
import axios from 'axios';
import React from 'react';
import {addCart} from '../evalutionRedux/action'
import { useDispatch } from 'react-redux';
const ListCard = ({id,url,name,price})=>{
    const dispatch = useDispatch();
    const handleAdd=()=>{
        const action = addCart({
            id: id,
            name: name,
            url: url,
            price: price,
            quantity:1
        })
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
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
            <button onClick={handleAdd} style={{width: '210px',height: '40px',backgroundColor:'black',color:'white'}}>add to cart</button>
        </div>
    )
}
const Home = ()=>{
    const [state,setState] = React.useState(null);
    React.useEffect(()=>{
        const config = {
            method: 'get',
            url: ' http://localhost:3000/Data'
        }
        axios(config)
        .then((res)=>{
            setState(res.data)
        })
    },[]);
    return (
        <div style={{marginTop:'100px'}}>
            {state?.map((item)=>(
                <div>
                <ListCard key={item.id} id={item.id} url={item.image} name={item.name} price={item.price}/>
                </div>
            ))}
        </div>
    )
}
export default Home
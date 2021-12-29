import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div style={{display: 'flex', padding:'1rem',gap: '5rem',width:'100%',height:'50px',backgroundColor:'aqua',overflow: 'hidden',position:'fixed',top:'0',justifyContent: 'center'}}>
            <Link to="/">Home</Link>
            <Link to="/add">Cart</Link>
        </div>
    )
}
export default Navbar
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div style={{display: 'flex', padding:'1rem',gap: '1rem',width:'100%',height:'100px',backgroundColor:'aqua'}}>
            <Link to="/">Home</Link>
            <Link to="/add">Cart</Link>
        </div>
    )
}
export default Navbar
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <div style={{display: 'flex', padding:'1rem',gap: '1rem'}}>
            <Link to="/">Home</Link>
            <Link to="/add">addtodo</Link>
            <Link to="/edit">edit todo</Link>
        </div>
    )
}
export default Navbar
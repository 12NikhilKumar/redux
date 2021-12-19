import { useDispatch } from "react-redux";
import { loginSuccess } from "../todoredux/action";
function Login(){
    const dispatch = useDispatch();
    const handleAdd = ()=>{
        const action = loginSuccess(Date.now());
        dispatch(action);
    };
    return (
        <div>
            <h3>Login</h3>
            <button onClick={handleAdd}>login success</button>
        </div>
    )
}
export default Login;
import { Route } from "react-router-dom";
import Home from "../evalution/home";
import Cart from "../evalution/cart";
const AllRoutes = ()=>{
    return (
        <>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/add'>
                <Cart/>
            </Route>
        </>
    )
}
export default AllRoutes;
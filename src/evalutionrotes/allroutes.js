import { Route } from "react-router-dom";
import Cart from "../evalution/home";
import Home from "../evalution/cart";
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
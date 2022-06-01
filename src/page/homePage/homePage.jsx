
import { BrowserRouter as Router , Route } from "react-router-dom"
import Cart from "../cart/Cart";
import ProductList from "../../component/product/ProductList";
import ProductDetail from "../../component/product/ProductDetail";
import { Slide } from "@material-ui/core";

const HomePage = () => {
    return (
        <>
        <Slide/>    
        <Router>
        <Route path="/cart" component={Cart}/>
        <Route path="/product" component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
        </Router>
        </>
    )
}
export default HomePage;
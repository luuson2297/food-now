import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./page/cart/Cart";
import Footer from "./page/footer/Footer";
import Header from "./page/header/Header";
import Scroll from "./component/scroll/Scroll";
import ProductList from "./component/product/ProductList";
import ProductDetail from "./component/product/ProductDetail";
import Slide from "./component/slide/Slide";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import LoginWithGoogle from "./page/login/LoginWithGoogle";
import LoginWithFacebook from "./page/login/LoginWithFacebook";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <Slide /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/loginWithGoogle" element={<LoginWithGoogle />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/cart" element={Cart} />
          <Route path="/product/:id" element={ProductDetail} />
          <Route exact path="/" element={<ProductList />} />
        </Routes>

        <Scroll />
        <Footer />
      </Router>
    );
  }
}
export default App;

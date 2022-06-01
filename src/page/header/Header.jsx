import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Header.scss";
import Login from "../login/Login";
import Category from "../../component/category/Category"

const Header = ({cart}) => {
  const [ signIn , setSignIn ]  = useState("Đăng nhập")
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <header className="header">
         
      <div className="navbar-container">
      
        <Category/>
        
        <div className="logo">
          <Link to="/">FOOD NOW</Link>
        </div>
        <ul className="header-item">
          <li>
            <Link className="fas fa-shopping-cart" to="/cart">{cartCount}  Giỏ hàng
            </Link>
         
          </li>

          <li>
            <Link to="/Login">{signIn}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};
export default connect(mapStateToProps)(Header);

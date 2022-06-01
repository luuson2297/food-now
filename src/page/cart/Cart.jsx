import { useState, useEffect } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


 const CART_LOCALSTORAGE = "CART";
  

const Cart = ({ cart  }) => {
  const [totalPrice, setTotalPrice] = useState(0, (initial) => JSON.parse(localStorage.getItem(CART_LOCALSTORAGE)) || initial);
  const [totalItems, setTotalItems] = useState(0, (initial) => JSON.parse(localStorage.getItem(CART_LOCALSTORAGE)) || initial);


  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.prices;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);


  useEffect(() => {
    localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(cart, totalPrice, totalItems));
  }, [cart, totalPrice, totalItems])



  return (

    <div className="container">
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            {/* <th className="text-center">Thành tiền</th>
            <th> </th> */}
          </tr>
        </thead>

        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <tfoot>
          <tr>
            <td>
              <a className="btn btn-warning">
                <i className="fa fa-angle-left" />
               <Link to="/">
                Tiếp tục mua hàng
                </Link>
              </a>
            </td>
            <td className="hidden-xs">Số lượng: {totalItems}</td>
            <td className="hidden-xs text-center">
              <strong>Tổng tiền :  {totalPrice}đ</strong>
            </td>
            <td>
              <a className="btn btn-success btn-block">
                Thanh toán <i className="fa fa-angle-right"></i>
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};

export default connect(mapStateToProps)(Cart);

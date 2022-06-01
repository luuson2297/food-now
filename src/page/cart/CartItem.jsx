import React, { useState } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/action/product.actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (

    <tbody>
      <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-sm-2 hidden-xs">
              <img
                src={item.img}
                alt=""
                className="img-responsive"
                width="100"
              />
            </div>
            <div className="col-sm-10">          
              <p>{item.description}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">{item.prices}đ</td>
        <td data-th="Quantity">
          <input
            className="form-control text-center"
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </td>
        {/* <td data-th="Subtotal" className="text-center">
         
        </td> */}
        <td className="actions" data-th="">
          <button className="btn btn-info btn-sm">
            <i className="fa fa-edit"></i>
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
          <i class="fas fa-trash"/>
            </button>
        </td>
      </tr>
    </tbody>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

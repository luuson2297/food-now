import React from "react";
import "../product/ProductList.scss";

import { connect } from "react-redux";
import { addToCart } from "../../redux/action/product.actions";

const ProductDetail = ({ current, addToCart }) => {
  return (
    <div className="containerr product-detail">
   <div className="card card-detail">
      <img
        className="card-img-top"
        src={current.img}      
      />
      <div className="card-body">
        <p className="description">{current.description}</p>
        <p className="price">Price: {current.prices}đ</p>
        <button
          onClick={() => addToCart(current.id)}
          className="btn btn-primary"
        >
          THÊM VÀO GIỎ
        </button>
      </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.product.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
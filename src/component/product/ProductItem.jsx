import React from "react";
import { Link } from "react-router-dom";
import "../product/ProductList.scss";
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/action/product.actions";

const ProductItem = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="col-4">
      <div className="card">
        <Link to={`/product/${product.id}`}>
          <div className="card-body">
            <img src={product.img}  onClick={() => loadCurrentItem(product)} className="card-img-top" alt="" />
          </div>
        </Link>

        <div className="card-title">{product.description}</div>
        <strong>Price: {product.prices}đ </strong>
      </div>
      <div className="card-footer">
        <Link to={`/product/${product.id}`}>
          <a
            className="btn btn-warning"
            onClick={() => loadCurrentItem(product)}
            href=""
          >
            Chi tiết
          </a>
        </Link>
        <a
          className="btn btn-primary"
          onClick={() => addToCart(product.id)} 
        >
          Thêm vào giỏ
        </a>
      </div>  
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);

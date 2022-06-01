
import React from "react";
import "../product/ProductList.scss";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  //     const [list, setList] = useState([])
//     useEffect(() => {
//         axios.get(environment.baseURL)
//             .then((res) => {
//                 setList(res.data)
//             })
//             .catch((err) => { "errr" })
//     }, [])
  return (
    <section className="containerr">
      <div className="row">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};


const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps)(ProductList);

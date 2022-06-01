
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./index.scss";
import getCategories from "../../redux/action/category.action"





const Category = () => {

  return (
    <div className="category-container">
      <input type="checkbox" id="check" />
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>FOOD NOW</header>
        <Link to="" className="active">
          <i className="fas fa-percentage"/>
          <span >Khuyến mãi</span>
        </Link>
        <Link to="" className="">
        <i className="fas fa-drumstick-bite"/>
          <span>Gà rán</span>
        </Link>
        <Link to="">
        <i className="fas fa-utensils"/>
          <span>Spagheti</span>
        </Link>
        <Link to="">
        <i className="fas fa-pizza-slice"/>
          <span>Pizza</span>
        </Link>
        <Link to="">
        <i className="fas fa-cocktail"/>
          <span>Đồ uống</span>
        </Link>
    
      </div>
    </div>
  );
};

// const mapStateToProps = (state)=> {
//   return {

//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCategories: (id) => dispatch(getCategories(id))
//   }
// }
// export default connect(mapDispatchToProps , mapStateToProps)(Category);
 export default Category
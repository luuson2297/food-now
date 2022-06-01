import { combineReducers } from "redux";
import productReducer from "./reducer/product.reducer";
import categoryReducer from "./reducer/category.reducer";

const rootReducer = combineReducers({
  product : productReducer,
  category : categoryReducer,
});

export default rootReducer;

import * as types from "../types/category.types";

const initialState  = {
  loading: false,
  success: 0,
  data: {
    categories: [],
    category: {}
  },
};


const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return {
        ...state,
        success : 1,
        data: {
          categories : action.payload
        }
      };
    
    default:
      return state;
  }
};
export default categoryReducer;

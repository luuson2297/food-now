import * as actionTypes from "../types/category.types";


 
export const getCategories = (categories) => {
    return {
        type: actionTypes.GET_CATEGORY,
        payload: categories
    }
}
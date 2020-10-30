import * as actionTypes from "./actionTypes";
import axios from "axios";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}
export function getCategories() {
   return async function (dispatch) {
    let url = "http://localhost:3000/categories";
    /*return fetch(url).then(response => response.json())
                  .then(result => dispatch(getCategoriesSuccess(result)));*/
    // return axios.get(url)
    // .then(result => dispatch(getCategoriesSuccess(result.data)))

    const result = await axios.get(url);
    // const { data } = await axios.get(url);
    dispatch(getCategoriesSuccess(result.data));
  };
}

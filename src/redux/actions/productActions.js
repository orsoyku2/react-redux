import * as actionTypes from './actionTypes'
import axios from 'axios'

export function getProductsSuccess(products) {
      return {type:actionTypes.GET_PRODUCTS_SUCCESS, payload:products}
}
export function getProducts(categoryId) {
      return async function (dispatch) {
            let url = "http://localhost:3000/products";
            if (categoryId) {
                  url = url + "?categoryId="+categoryId
            }
            const { data } = await axios.get(url);
            dispatch(getProductsSuccess(data));
      }
}
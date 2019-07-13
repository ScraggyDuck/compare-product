import * as types from "../constants/actionTypes";

export const addToCart = product => ({
  type: types.ADD_TO_CART,
  product
});

export const removeToCart = id => ({
  type: types.REMOVE_TO_CART,
  id
});

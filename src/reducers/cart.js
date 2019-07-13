import * as types from "../constants/actionTypes";
import { findIndex } from "lodash";

var initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let newCart_Add = [...state];
      newCart_Add.push(action.product);
      return newCart_Add;
    case types.REMOVE_TO_CART:
      const index = findIndex(state, product => product.id === action.id);
      let newCart_Remove = [...state];
      newCart_Remove.splice(index, 1);
      return newCart_Remove;
    default:
      return state;
  }
};

export default cart;

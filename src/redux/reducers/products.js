import {SET_PRODUCTS} from '../actions/types';
import {initialState} from './initialState';
export default (productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const {payload} = action;
      return {
        ...state,
        products: [...payload],
      };
    default:
      return state;
  }
});

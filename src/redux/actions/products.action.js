import {SET_PRODUCTS} from './types';
import axios from 'react-native-axios';

const BASE_URL = 'https://turing-api-endpoints.herokuapp.com/api';
export const getProducts = (page = 1) => async dispatch => {
  try {
    const {
      data: {rows},
    } = await axios.get(`https://turing-api-endpoints.herokuapp.com/api/products/?page=${page}`);
    return dispatch(setProducts(rows));
  } catch (e) {
    console.log('err ');
  }
};

export const setProducts = payload => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

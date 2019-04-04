import {SHOW_PRODUCTS, DELETED_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT} from './types';

// Axios
import axios from 'axios';

 export const SHOW_PRODUCTOS = () => async dispatch => {
   const response = await axios.get('http://localhost:5000/productos');
   //console.log(response, 'data', response.data);
   dispatch({
     type: SHOW_PRODUCTS,
     payload: response.data
   })
 }


export const deletedProducts = (id) => async dispatch => {
  await axios.delete(`http://localhost:5000/productos/${id}`);
  dispatch({
    type: DELETED_PRODUCT,
    payload: id
  })
}

export const addedProducts = e => async dispatch => {
  await axios.post('http://localhost:5000/productos/', e);
  dispatch({
    type: ADD_PRODUCT,
    payload: e
  })
}

export const showProducts = e => async dispatch => {
const response =  await axios.get(`http://localhost:5000/productos/${e}`);
  dispatch({
    type: SHOW_PRODUCT,
    payload: response.data
  })
}

export const updateProducts = (e) => async dispatch => {
  const response = await axios.put(`http://localhost:5000/productos/${e.id}`, e);
  dispatch({
    type: EDIT_PRODUCT,
    payload: response
  })
}

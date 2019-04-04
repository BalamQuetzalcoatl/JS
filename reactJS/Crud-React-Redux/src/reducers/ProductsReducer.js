import {SHOW_PRODUCTS, DELETED_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT} from './../Actions/types';

const initialState = {
  products: []
}

export default (state = initialState, action) =>
{
  // console.log(state, action);
  switch(action.type)
  {
    case SHOW_PRODUCTS:
    return {
      ...state,
      products: action.payload
    }
    case DELETED_PRODUCT: return {
      ...state,
      products: state.products.filter((product) => product.id !== action.payload)
    }

    case ADD_PRODUCT : return {
      ...state,
      products: [...state.products, action.payload]
    }

    case SHOW_PRODUCT: return {
      ...state, product: action.payload
    }

    case EDIT_PRODUCT: return {
      ...state, products: state.products.map(
        product => product.id === action.payload.id ? (product = action.payload): product
      )
    }
    default: return state
  }
}

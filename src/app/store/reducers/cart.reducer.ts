import { ActionEx, ProductsActionTypes } from '../actions/cart.actions';
import { Product } from '../../models/products';

export const initialState: Product[] = [];

export const CartReducer = (state = initialState, action: ActionEx) => {
  switch (action.type) {
    case ProductsActionTypes.setCart:
      const clone = state.filter(item => item.id === action.payload.id).length;
      if (clone) {
        alert('You have already added this product');
        return state;
      }
      return [...state, action.payload];

    case ProductsActionTypes.removeFromCart:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

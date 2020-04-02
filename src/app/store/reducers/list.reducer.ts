import { ActionEx, ProductsActionTypes } from '../actions/list.actions';
import { Product } from '../../models/products';

export const initialState: Product[] = [];

export const ListReducer = (state = initialState, action: ActionEx) => {
  switch (action.type) {
    case ProductsActionTypes.setList:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

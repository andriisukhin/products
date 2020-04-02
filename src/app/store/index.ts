import { ActionReducerMap } from '@ngrx/store';
import * as list from './reducers/list.reducer';
import * as cart from './reducers/cart.reducer';
import { Product } from '../models/products';

export interface State {
  list: Product[];
  cart: Product[];
}

export const reducers: ActionReducerMap<State> = {
  list: list.ListReducer,
  cart: cart.CartReducer,
};

export const initialState: State = {
  list: list.initialState,
  cart: cart.initialState,
};

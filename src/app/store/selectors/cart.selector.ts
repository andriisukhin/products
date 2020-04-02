import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { Product } from '../../models/products';

const products = (state: State) => state.cart;

export const selectCart = createSelector(
  products,
  (state: Product[] ) => state
);

export const summary = createSelector(
  products,
  (state: Product[]) => {
    let sum = 0;
    state.forEach(item => {
      sum += +item.variants[0].price;
      return sum;
    });
    return sum.toFixed(2);
  }
);

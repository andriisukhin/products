import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { Product } from '../../models/products';

const products = (state: State) => state.list;

export const selectList = createSelector(
  products,
  (state: Product[] ) => state
);
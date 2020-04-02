import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  setCart = '[ Cart ] setCart',
  removeFromCart = '[ Cart ] removeFromCart'
}

export class ActionEx implements Action {
  readonly type: any;
  payload: any;
}

export class SetCart implements ActionEx {
  readonly type = ProductsActionTypes.setCart;

  constructor(public payload: any) {}
}

export class RemoveFromCart implements ActionEx {
  readonly type = ProductsActionTypes.removeFromCart;

  constructor(public payload: any) {}
}

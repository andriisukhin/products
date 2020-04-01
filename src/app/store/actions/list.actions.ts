import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  setList = '[ List ] setList',
}

export class ActionEx implements Action {
  readonly type: any;
  payload: any;
}

export class setList implements ActionEx {
  readonly type = ProductsActionTypes.setList;

  constructor(public payload: any) {}
}
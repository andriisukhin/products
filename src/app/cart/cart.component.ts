import { Component} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCart, summary } from '../store/selectors/cart.selector';
import { State } from '../store/index';
import { Product } from '../models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private store: Store<State>) {
    this.store.pipe(select(selectCart)).subscribe((data) => {
      this.cart = data;
    })
    this.store.pipe(select(summary)).subscribe((data) => {
      this.summary = data;
    })
  }
  test: any
  
  cart: Product[]

  summary: any

  cartOpened = false;

  toggleCart() {
    this.cartOpened = !this.cartOpened;
  }
}

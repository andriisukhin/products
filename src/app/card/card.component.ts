import { Component, Input } from '@angular/core';
import { Product } from '../models/products';
import { Store } from '@ngrx/store';
import { SetCart, RemoveFromCart } from '../store/actions/cart.actions';
import { State } from '../store/index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(
    private store: Store<State>
  ) {}

  @Input() card: Product;
  @Input() id: number;
  @Input() inCart: boolean;

  images: Array<string>;

  addToCart(product: Product) {
    this.store.dispatch(new SetCart(product));
  }

  removeFromCart(id: number) {
    this.store.dispatch(new RemoveFromCart(id));
  }

}

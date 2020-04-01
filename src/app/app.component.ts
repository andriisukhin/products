import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Store, select } from '@ngrx/store';
import { setList } from './store/actions/list.actions';
import { State } from './store/index';
import { selectList } from './store/selectors/list.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'products';
  constructor(
    private appService: AppService,
    private store: Store<State>
  ) {
    this.store.pipe(select(selectList)).subscribe((data) => {
      this.products = data;
    })
  }

  products: any;

  fetchProducts() {
    this.appService.getData().subscribe((response: any) => {
      this.store.dispatch(new setList(response.products));
    })
  }

  ngOnInit() {
    this.fetchProducts();
  }
}

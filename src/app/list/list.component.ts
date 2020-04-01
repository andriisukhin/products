import { Component, Input } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor() { }

  @Input() list: Product[]

}

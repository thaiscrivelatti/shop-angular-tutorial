import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  // Property to be received by a father component
  @Input() product: Product | undefined;

  @Output() notify = new EventEmitter();

  constructor() { }



}

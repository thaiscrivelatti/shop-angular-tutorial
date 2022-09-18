import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products = products

  constructor() { }

  /**
   * Method that triggers and alert
   */
  share() {
    window.alert("O produto foi compartilhado!")
  }

  /**
   * Method/event raised by child component product-alerts
   */
  onNotify() {
    window.alert("Você será notificado quando o produto estiver a venda.")
  }
}

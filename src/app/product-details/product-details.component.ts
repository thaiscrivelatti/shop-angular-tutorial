import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Get the product id from route
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    // Find the product in the products array
    this.product = products.find((product) => product.id === productId);
  }

  // Add product to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Seu produto foi adicionado no carrinho!");
  }
}

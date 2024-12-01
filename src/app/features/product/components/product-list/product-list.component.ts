import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CartService } from "../../../cart/services/cart.service";
import { Product } from "../../models/product-model";
import { ProductService } from "../../services/product/product.service";
import { CartItem } from "../../../cart/models/cart-model";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent implements OnInit {
  dataSource!: Observable<Product[]>;

  loading = false;

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource = this.productService.getProducts();
  }

  viewProduct(product: any): void {
    this.router.navigate(["/product", product.id], { state: { product } });
  }

  addItemToCart(item: Product) {
    const cartItem: CartItem = {
      ...item, // نسخ خصائص الـ Product
      quantity: 1, // تعيين الكمية إلى 1
    };
    this.cartService.addToCart(cartItem);
  }
}

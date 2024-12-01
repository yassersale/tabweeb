import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CartItem } from "../../models/cart-model";
import { Router } from "@angular/router";
import { Observable, forkJoin, map } from "rxjs";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrl: "./cart-list.component.css",
})
export class CartListComponent {
  cartItems$: Observable<CartItem[]>;

  displayedColumns: string[] = ["productName", "quantity", "price", "total", "actions"];

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems$ = this.cartService.cartItems$;
  }

  addItemToCart(item: any) {
    this.cartService.addToCart(item);
  }

  removeItemFromCart(item: CartItem) {
    this.cartService.removeFromCart(item.id);
    this.cartItems$ = this.cartService.cartItems$;
  }

  updateQuantity(item: CartItem, change: number) {
    item.quantity += change;
    this.cartService.updateQuantity(item.id, item.quantity);
  }

  // Calculate total using RxJS map operator
  calculateTotal(): Observable<number> {
    return this.cartItems$.pipe(map((cartItems) => cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)));
  }

  proceedToCheckout(): void {
    let cart: CartItem[] = [];

    let total: number = 0;

    this.cartItems$.subscribe((item) => {
      cart = item;
    });

    this.calculateTotal().subscribe((sum) => {
      total = sum;
    });

    const cartData = { items: cart, total: total };
    this.router.navigate(["/checkout"], { state: { cartData } });
  }
}

import { Component } from "@angular/core";
import { CartService } from "../../../cart/services/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-order-review",
  templateUrl: "./order-review.component.html",
  styleUrl: "./order-review.component.css",
})
export class OrderReviewComponent {
  constructor(public cartService: CartService, private router: Router) {}

  confirmOrder() {
    alert("Order Confirmed!");
    this.cartService.clearCart();
    this.router.navigate(["/"]);
  }
}

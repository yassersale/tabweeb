import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/cart-model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.loadCartFromLocalStorage());
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    // Initialize cart data from localStorage when the service starts
    const savedCart = this.loadCartFromLocalStorage();
    if (savedCart) {
      this.cartItemsSubject.next(savedCart);
    }
  }

  // Load cart from localStorage
  private loadCartFromLocalStorage(): CartItem[] {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  }

  // Save cart to localStorage
  private saveCartToLocalStorage(): void {
    const cartData = this.cartItemsSubject.getValue();
    localStorage.setItem("cart", JSON.stringify(cartData));
  }

  addToCart(item: CartItem): void {
    const items = this.cartItemsSubject.getValue();
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.push(item);
    }
    this.cartItemsSubject.next([...items]);
    this.saveCartToLocalStorage(); // Save to localStorage

    alert("Added successfully");
  }

  removeFromCart(itemId: number): void {
    const items = this.cartItemsSubject.getValue().filter((item) => item.id !== itemId);
    this.cartItemsSubject.next(items);
    this.saveCartToLocalStorage(); // Save to localStorage
  }

  updateQuantity(itemId: number, quantity: number): void {
    const items = this.cartItemsSubject.getValue();
    const item = items.find((i) => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(itemId);
      } else {
        this.cartItemsSubject.next([...items]);
      }
      this.saveCartToLocalStorage(); // Save to localStorage
    }
  }

  clearCart(): void {
    this.cartItemsSubject.next([]); // Clear the cart in the BehaviorSubject
    localStorage.removeItem("cart"); // Remove the cart data from localStorage
  }

  getTotalPrice(): number {
    return this.cartItemsSubject.getValue().reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

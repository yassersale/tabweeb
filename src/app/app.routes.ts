import { Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./features/product/product.module").then((m) => m.ProductModule), //Lazy-loaded  Product
  },
  {
    path: "cart",
    loadChildren: () => import("./features/cart/cart.module").then((m) => m.CartModule), //Lazy-loaded  Cart
  },
  {
    path: "checkout",
    loadChildren: () => import("./features/checkout/checkout.module").then((m) => m.CheckoutModule), //Lazy-loaded  Checkout
    canActivate: [AuthGuard],
  },

  { path: "login", loadChildren: () => import("./features/auth/auth.module").then((m) => m.AuthModule) }, // Lazy-loaded login

  { path: "**", redirectTo: "/" },
];

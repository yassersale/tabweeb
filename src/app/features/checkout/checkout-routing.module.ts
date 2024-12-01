import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { PaymentMethodsComponent } from "./components/payment-methods/payment-methods.component";
import { OrderReviewComponent } from "./components/order-review/order-review.component";
import { ShippingDetailsComponent } from "./components/shipping-details/shipping-details.component";

const routes: Routes = [
  {
    path: "",
    component: CheckoutComponent,
    children: [
      { path: "", redirectTo: "shipping", pathMatch: "full" },
      { path: "shipping", component: ShippingDetailsComponent },
      { path: "payment", component: PaymentMethodsComponent },
      { path: "review", component: OrderReviewComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}

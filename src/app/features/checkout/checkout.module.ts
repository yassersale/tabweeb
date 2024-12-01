import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { PaymentMethodsComponent } from "./components/payment-methods/payment-methods.component";
import { OrderReviewComponent } from "./components/order-review/order-review.component";
import { ShippingDetailsComponent } from "./components/shipping-details/shipping-details.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CheckoutComponent, ShippingDetailsComponent, PaymentMethodsComponent, OrderReviewComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckoutRoutingModule, SharedModule],
})
export class CheckoutModule {}

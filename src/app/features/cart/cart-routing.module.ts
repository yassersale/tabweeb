import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartListComponent } from "./components/cart-list/cart-list.component";

const routes: Routes = [
  {
    path: "",
    children: [{ path: "", component: CartListComponent, pathMatch: "full" }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}

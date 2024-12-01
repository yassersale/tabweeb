import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../models/product-model";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  @Input() product!: Product;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product = history.state.product;
    if (!this.product) {
      // Handle the case when product is not passed (e.g., via URL or API)
      const id = this.route.snapshot.paramMap.get("id");
      // Fetch the product details from an API using the ID
    }
  }

  back() {
    this.router.navigate(["/"]);
  }
}

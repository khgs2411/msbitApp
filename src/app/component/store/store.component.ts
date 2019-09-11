import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"]
})
export class StoreComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit() {}

  get products() {
    return this.service.products;
  }
}

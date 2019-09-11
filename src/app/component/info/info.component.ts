import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit() {}

  get product() {
    return this.service.productInfo;
  }
}

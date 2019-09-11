import { Component, OnInit, Input } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  //public
  @Input() public product;
  public fedex: any;
  public ups: any;
  public third: any;

  constructor(private service: ProductService, private cookie: CookieService) {}

  ngOnInit() {
    this.checkType(this.product);
  }

  checkType(product) {
    if (product.type == 1) {
      const temp = this.cookie.get(`${product.fedex.id}`);
      if (temp) {
        this.fedex = JSON.parse(temp);
      } else {
        this.fedex = product.fedex;
      }
    }
    if (product.type == 2) {
      product.ups.map(product => (this.ups = product));
    }
    if (product.type == 3) {
      const temp = this.cookie.get(`${product.id}`);
      if (temp) {
        this.third = JSON.parse(temp);
      } else {
        this.third = product;
      }
    }
  }
}

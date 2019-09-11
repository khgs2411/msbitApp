import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpService } from "./http.service";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  //public
  public products: any;
  public productInfo: any;
  public success: boolean;

  //private
  private subscribtion: Subscription;

  constructor(private http: HttpService, private cookie: CookieService) {
    this.success = false;
    this.subscribtion = this.http
      .getJson()
      .subscribe(data => this.applyToProducts(data));
  }

  applyToProducts(data: any) {
    this.products = data;
    this.subscribtion.unsubscribe();
    return this.products;
  }

  displayInfo(data) {
    const temp = this.cookie.get(`${data.id}`);
    if (temp) {
      console.log(JSON.parse(temp));
      this.productInfo = JSON.parse(temp);
    } else {
      this.productInfo = data;
    }
  }

  saveData(product) {
    this.cookie.set(`${product.id}`, JSON.stringify(product));
    const temp = this.cookie.get(`${product.id}`);
    console.log(JSON.parse(temp));
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 1500);
  }

  deleteProduct(product) {
    this.products.splice(product.id - 1, 1);
  }
}

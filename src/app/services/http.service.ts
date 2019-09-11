import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  apiUrl: string;

  public getJson() {
    this.apiUrl =
      "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
    return this.http.get(this.apiUrl);
  }
}

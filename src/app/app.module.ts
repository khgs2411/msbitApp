import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreComponent } from "./component/store/store.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { ProductComponent } from "./component/product/product.component";
import { InfoComponent } from "./component/info/info.component";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    NavbarComponent,
    ProductComponent,
    InfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}

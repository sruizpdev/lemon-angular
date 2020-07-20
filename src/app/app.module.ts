import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CrudComponent } from "./components/crud/crud.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AboutComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

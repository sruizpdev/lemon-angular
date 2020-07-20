import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AboutComponent } from "./components/about/about.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { CrudComponent } from "./components/crud/crud.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "crud", component: CrudComponent },
  { path: "profile", component: ProfileComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

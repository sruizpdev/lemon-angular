import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  logado: boolean;
  constructor(private _authService: AuthService) {
    this.logado = this._authService.isLogged();
    console.log(this.logado);
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  logado: boolean;
  constructor(private _authService: AuthService) {
    this.logado = this._authService.isLogged();
    console.log(this.logado);
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  logado: boolean;
  constructor(private _authService: AuthService) {
    this.logado = this._authService.isLogged();
    console.log(this.logado);
  }

  ngOnInit(): void {}
}

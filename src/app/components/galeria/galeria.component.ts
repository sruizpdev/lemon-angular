import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-galeria",
  templateUrl: "./galeria.component.html",
  styleUrls: ["./galeria.component.scss"],
})
export class GaleriaComponent implements OnInit {
  logado: boolean;
  constructor(private _authService: AuthService) {
    this.logado = this._authService.isLogged();
    console.log(this.logado);
  }

  ngOnInit(): void {}
}

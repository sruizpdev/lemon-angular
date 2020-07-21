import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.scss"],
})
export class CrudComponent implements OnInit {
  logado: boolean;
  constructor(private _authService: AuthService) {
    this.logado = this._authService.isLogged();
    console.log(this.logado);
  }

  ngOnInit(): void {}
}

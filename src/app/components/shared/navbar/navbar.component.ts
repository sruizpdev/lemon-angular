import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() logado: boolean;
  username: string;
  constructor(private _authService: AuthService) {
    this.username = this._authService.getUsername();
  }

  ngOnInit(): void {}
  salir() {
    this.logado = false;
    this._authService.logout();
    console.log("Saliendo...");
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() logado: boolean;
  username: string;
  constructor(private _authService: AuthService, private router: Router) {
    this.username = this._authService.getUsername();
  }

  ngOnInit(): void {}
  salir() {
    this.logado = false;
    this._authService.logout();
    this.router.navigate(["/login"]);
    console.log("Saliendo...");
  }
}

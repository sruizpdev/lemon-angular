import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router) {
    if (_authService.login("master8@lemoncode.net", "12345678")) {
      alert("login correcto");
      this.router.navigate(["/dashboard"]);
    } else {
      alert("login incorrecto");
    }
  }
  ngOnInit(): void {}
}

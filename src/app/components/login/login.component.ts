import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl(""),
  });

  constructor(private _authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  login() {
    const { email, password } = this.profileForm.value;
    if (this._authService.login(email, password)) {
      this.router.navigate(["/dashboard"]);
    } else {
      alert("Login incorrecto");
    }
  }
}

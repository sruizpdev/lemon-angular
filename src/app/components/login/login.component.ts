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
    email: new FormControl(""),
    password: new FormControl(""),
  });

  email2 = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email2.hasError("required")) {
      return "You must enter a value";
    }

    return this.email2.hasError("email2") ? "Not a valid email" : "";
  }
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

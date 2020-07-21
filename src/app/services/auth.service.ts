import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user = {
    username: "",
    password: "",
    logged: false,
  };

  constructor() {
    console.log("servicio listo");
  }

  login(username: string, password: string) {
    if (username === "2@2.com" && password === "111") {
      this.user.logged = true;
      return true;
    } else {
      this.user.logged = false;
      return false;
    }
  }
  isLogged(): boolean {
    return this.user.logged;
  }
}

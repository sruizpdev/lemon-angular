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
      this.user.username = username;
      this.user.password = password;
      return true;
    } else {
      this.user.logged = false;
      return false;
    }
  }
  isLogged(): boolean {
    return this.user.logged;
  }
  logout(): void {
    this.user.username = "";
    this.user.password = "";
    this.user.logged = false;
  }
  getUsername(): string {
    return this.user.username;
  }
}

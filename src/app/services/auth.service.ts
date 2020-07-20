import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {
    console.log("servicio listo");
  }

  login(username: string, password: string) {
    return username === "master8@lemoncode.net" && password === "12345678";
  }
}

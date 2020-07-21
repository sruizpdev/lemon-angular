import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {
    console.log("servicio listo");
  }

  login(username: string, password: string) {
    return username === "2@2.com" && password === "111";
  }
}

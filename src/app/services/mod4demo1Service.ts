import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mod4demo1Service {

  // user: { name: string } | undefined
  readonly user = signal<{name : string} | null>(null)

  public login() {
    this.user.set({name: "Sylvain"})
    localStorage.setItem("user", JSON.stringify({name: "Sylvain"}))
  }

  public logout() {
    localStorage.removeItem("user")
    this.user.set(null);
  }

  public isLogged() : boolean {
    return this.user() != undefined
  }


}

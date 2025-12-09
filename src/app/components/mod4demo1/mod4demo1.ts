import {Component, Signal} from '@angular/core';
import {Mod4demo1Service} from '../../services/mod4demo1Service';


@Component({
  selector: 'app-mod4demo1',
  imports: [],
  templateUrl: './mod4demo1.html',
  styleUrl: './mod4demo1.css',
  standalone: true
})
export class Mod4demo1 {

  user?: Signal<{ name: string } | null>

  // userService2 = inject(Mod4demo1Service)

  constructor(private userService : Mod4demo1Service) {

  }

  ngOnInit(){
    this.user = this.userService.user
  }


  login(){
    this.userService.login()
    // this.user = this.userService.user
  }

  logout(){
    this.userService.logout()
    //this.user = this.userService.user
  }

  isLogged(){
    return this.userService.isLogged()
  }


}

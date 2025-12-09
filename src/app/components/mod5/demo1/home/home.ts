import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  aboutUs : string = "/about-us"

  constructor(private router : Router) {
  }

  goToAbout() {
    this.router.navigate(["/about-us"])
    // this.router.navigateByUrl("/about-us")
  }

  goToDetail() {
    this.router.navigate(["/detail", 45])
    // this.router.navigateByUrl("/detail/45")
  }
}

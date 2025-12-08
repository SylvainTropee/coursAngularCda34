import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mod3demo1',
  imports: [
    FormsModule
  ],
  templateUrl: './mod3demo1.html',
  styleUrl: './mod3demo1.css',
  standalone: true
})
export class Mod3demo1 {

  name? : string

  ngOnInit(){
    this.name = "Raymond"
  }

  resetName() {
    this.name = ""
  }
}

import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgClass, NgIf} from '@angular/common';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr)

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    DatePipe
  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
  standalone: true
})
export class Mod3demo2 {

  name? : string;
  users : string[] // Array<string>
  date :  Date;

  constructor() {
    this.users = []
    this.date = new Date()
  }

  resetName(){
    this.name  = ""
  }

  addUser(){
    if(this.name){
      this.users.push(this.name)
      this.resetName()
    }
  }

  removeUser(index : number){
    this.users.splice(index, 1)
  }


}

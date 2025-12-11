import { Component } from '@angular/core';
import {Mod8Service} from '../../../services/mod8-service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
  standalone: true
})
export class Comp2 {

  joke;

  constructor(private jokeService : Mod8Service) {
    this.joke = this.jokeService.joke
  }

}

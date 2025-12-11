import {Component, Signal} from '@angular/core';
import {Mod8Service} from '../../../services/mod8-service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
  standalone: true
})
export class Comp1 {
  joke;

  constructor(private jokeService : Mod8Service) {
    this.joke = this.jokeService.joke
  }

  loadJoke() {
    this.jokeService.loadJoke()
  }
}

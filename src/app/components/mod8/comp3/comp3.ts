import { Component } from '@angular/core';
import {Mod8Service} from '../../../services/mod8-service';

@Component({
  selector: 'app-comp3',
  imports: [],
  templateUrl: './comp3.html',
  styleUrl: './comp3.css',
  standalone: true
})
export class Comp3 {

  jokeLength;

  constructor(private jokeService : Mod8Service) {
    this.jokeLength = this.jokeService.jokeLength
  }


}

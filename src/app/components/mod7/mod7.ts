import {ChangeDetectorRef, Component} from '@angular/core';
import {Mod7service} from '../../services/mod7service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Joke} from '../../models/joke';

@Component({
  selector: 'app-mod7',
  imports: [
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './mod7.html',
  styleUrl: './mod7.css',
  standalone: true
})
export class Mod7 {

  joke: string = ''
  joke$ : Observable<string>

  joke2? : Joke
  joke3? : Joke

  constructor(private apiService: Mod7service, private cdr: ChangeDetectorRef) {
    this.apiService.getJoke().subscribe(
      (response) => {
        console.log(response)
        this.joke = response
        this.cdr.detectChanges()
      }
    )
    this.joke$ = this.apiService.getJoke()

    this.apiService.getJoke2().subscribe(
      joke =>{
        this.joke2 = joke
        this.cdr.detectChanges()
      }
    )

    this.apiService.getJoke3().subscribe(
      joke => {
        this.joke3 = joke
        this.cdr.detectChanges()
      }
    )

  }

}

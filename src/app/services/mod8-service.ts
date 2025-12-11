import {computed, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

interface ChuckJoke {
  value: string
}


@Injectable({
  providedIn: 'root',
})
export class Mod8Service {

  private _joke = signal<ChuckJoke | null>(null)
  readonly joke = this._joke.asReadonly()

  readonly jokeLength = computed( () => this._joke()?.value.length)


  private readonly BASE_URL: string = "https://api.chucknorris.io/jokes/random"

  constructor(private http: HttpClient) {
  }

  public async loadJoke() {

    const joke = await firstValueFrom(this.http.get<ChuckJoke>(this.BASE_URL))
    this._joke.set(joke)
  }


}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Joke} from '../models/joke';
import {catchError, distinctUntilChanged, map, retry, switchMap, tap} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Mod7service {

  private readonly BASE_URL: string = "https://api.chucknorris.io/jokes/random"

  constructor(private http: HttpClient) {
  }

  getJoke() {
    return this.http.get<string>(this.BASE_URL)
  }

  getJoke2() {
    return this.http.get<Joke>(this.BASE_URL)
  }

  getJoke3() {
    return this.http.get<any>(this.BASE_URL).pipe(
      map(response => {
          return {
            id: response.id,
            value: response.value,
            iconUrl: response.icon_url,
            icon_url: ""
          } //as Joke
        }
      ),
      tap(
        //intéressant pour logger
        joke => joke
      ),
      //bloquer le flux en cas de réponses identitques
      distinctUntilChanged(),
      //permet de chaines des appels acynchrones
      switchMap(
        joke => this.http.get<Joke>(this.BASE_URL)
      ),
      retry(2),
      //catchError()
    )
  }

  addJoke() {

    const joke: Joke = {
      id : "454646",
      icon_url : "45465464",
      iconUrl : "kdsfhsdkhf",
      value : "Chucky"
    }

    this.http.post(this.BASE_URL, joke)
  }

  getJoke4(){
    const params = new HttpParams().set('name', 'Michel')
    return this.http.get<Joke>(this.BASE_URL, {params : params})
  }


}

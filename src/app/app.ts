import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod2demo1} from './components/mod2demo1/mod2demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod2demo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CoursAngularCda34');
}

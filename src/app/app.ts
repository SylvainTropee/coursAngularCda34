import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod2demo1} from './components/mod2demo1/mod2demo1';
import {Mod3demo1} from './components/mod3demo1/mod3demo1';
import {Mod3demo2} from './components/mod3demo2/mod3demo2';
import {Mod4demo1} from './components/mod4demo1/mod4demo1';
import {Mod6demo1} from './components/mod6demo1/mod6demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod2demo1, Mod3demo1, Mod3demo2, Mod4demo1, Mod6demo1],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CoursAngularCda34');
}

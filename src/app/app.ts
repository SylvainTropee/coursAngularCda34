import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod2demo1} from './components/mod2demo1/mod2demo1';
import {Mod3demo1} from './components/mod3demo1/mod3demo1';
import {Mod3demo2} from './components/mod3demo2/mod3demo2';
import {Mod4demo1} from './components/mod4demo1/mod4demo1';
import {Mod6demo1} from './components/mod6demo1/mod6demo1';
import {Mod7} from './components/mod7/mod7';
import {Comp1} from './components/mod8/comp1/comp1';
import {Comp2} from './components/mod8/comp2/comp2';
import {Comp3} from './components/mod8/comp3/comp3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod2demo1, Mod3demo1, Mod3demo2, Mod4demo1, Mod6demo1, Mod7, Comp1, Comp2, Comp3],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CoursAngularCda34');
}

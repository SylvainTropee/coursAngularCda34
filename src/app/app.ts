import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod2demo1} from './components/mod2demo1/mod2demo1';
import {Mod3demo1} from './components/mod3demo1/mod3demo1';
import {Mod3demo2} from './components/mod3demo2/mod3demo2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod2demo1, Mod3demo1, Mod3demo2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CoursAngularCda34');
}

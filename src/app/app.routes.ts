import {Routes} from '@angular/router';
import {Home} from './components/mod5/demo1/home/home';
import {About} from './components/mod5/demo1/about/about';
import {Detail} from './components/mod5/demo2/detail/detail';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
  {path: "home", component: Home},
  {path: "about-us", component: About},
  {path: "detail/:id", component : Detail, canActivate : [authGuard]},
  {path: "test", component: About, outlet: "test"},
  {path: "**", component: Home},
];

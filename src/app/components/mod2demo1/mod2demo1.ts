import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-mod2demo1',
  standalone: true,
  imports: [],
  templateUrl: './mod2demo1.html',
  styleUrl: './mod2demo1.css',
})
export class Mod2demo1 /*implements OnInit, OnDestroy, AfterViewInit*/{

  username? : string;

  constructor() {
    console.log("Composant instancié")
  }

  ngOnInit(): void {
    this.username = "Michel"
    console.log("Données initialisées")
  }

  ngAfterViewInit(){
    console.log("La vue est chargée")
  }

  ngOnDestroy(): void {
    console.log("Le composant est détruit");
  }


  public changeName(){
    this.username = "Patrick !";
  }





}

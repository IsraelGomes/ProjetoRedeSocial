import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-pt',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static pagina: string;
  constructor() {
    HomeComponent.pagina = "postagens";
  }

  ngOnInit() {
  }

  getTypePagina(): string{
    return HomeComponent.pagina;
  }

  setTypePagina(typePage: string){
    HomeComponent.pagina = typePage;
  }
}

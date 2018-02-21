import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent implements OnInit {
  static pagina: string;
  constructor() {
    HomeEnComponent.pagina = "postagens";
  }

  ngOnInit() {
  }

  getTypePagina(): string{
    return HomeEnComponent.pagina;
  }

  setTypePagina(typePage: string){
    HomeEnComponent.pagina = typePage;
  }
}

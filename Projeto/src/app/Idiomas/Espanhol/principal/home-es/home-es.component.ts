import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-es',
  templateUrl: './home-es.component.html',
  styleUrls: ['./home-es.component.css']
})
export class HomeEsComponent implements OnInit {
  static pagina: string;
  constructor() {
    HomeEsComponent.pagina = "postagens";
  }

  ngOnInit() {
  }

  getTypePagina(): string{
    return HomeEsComponent.pagina;
  }

  setTypePagina(typePage: string){
    HomeEsComponent.pagina = typePage;
  }
}

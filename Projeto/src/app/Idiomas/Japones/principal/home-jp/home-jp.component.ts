import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'home-jp',
  templateUrl: './home-jp.component.html',
  styleUrls: ['./home-jp.component.css']
})
export class HomeJpComponent implements OnInit {
  static pagina: string;
  constructor() {
    HomeJpComponent.pagina = "postagens";
    AppComponent.idioma = "nihongo";
  }

  ngOnInit() {
  }

  getTypePagina(): string{
    return HomeJpComponent.pagina;
  }

  setTypePagina(typePage: string){
    HomeJpComponent.pagina = typePage;
  }
}

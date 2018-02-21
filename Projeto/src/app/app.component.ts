import { Component } from '@angular/core';
import { UsuarioService } from './Aplicacao/Usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static idioma: string;
  portugues: string;
  japones: string;
  ingles: string;
  espanho: string;

  constructor(private usuarioService: UsuarioService) {

    this.portugues = "portugues";
    this.japones = "nihongo";
    this.espanho = "espanhol";
    this.ingles = "english";

    usuarioService.loginAutomatico();

  }
  logado(): boolean {
    return UsuarioService.logado;
  }
  getIdiomaPortugues(): boolean
  {

    if (UsuarioService.logado == true) {
      AppComponent.idioma = UsuarioService.usuarioLogado.idioma;
    }

  return (AppComponent.idioma == this.portugues);
  }

  getIdiomaJapones(): boolean
  {

    if (UsuarioService.logado == true) {
      AppComponent.idioma = UsuarioService.usuarioLogado.idioma;
    }

  return (AppComponent.idioma == this.japones);
  }
}

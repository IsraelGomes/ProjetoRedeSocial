import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/usuario';
import { UsuarioService } from 'app/usuario.service';
import { Poster } from 'app/poster';
import { Data } from 'app/data';

@Component({
  selector: 'tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css'],
  providers: [UsuarioService]
})
export class TelaPrincipalComponent implements OnInit {
  conteudo: string;

  constructor() { }

  ngOnInit() {
  }

  usuarioLogado(): Usuario {
    return UsuarioService.usuarioLogado;
  }

  postar(conteudo: string): void {
      UsuarioService.postar(conteudo);
      this.conteudo = "";
  
  }

  setConteudo(conteudo: string): void {
    this.conteudo = conteudo;
  }

  getPosters(): Poster[] {
    return UsuarioService.usuarioLogado.getPosters();
  }
}

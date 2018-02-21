import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { Poster } from '../../../../Aplicacao/Posters/poster';

@Component({
  selector: 'postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {
  conteudo: string;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  postar(valor: string) {
    let poster: Poster = new Poster();

    poster.setTexto(valor);
    poster.setUsr(UsuarioService.usuarioLogado.nome + " " + UsuarioService.usuarioLogado.sobrenome);

    this.usuarioService.fazPostagem(poster);
  }

  getPosters(): Poster[] {
    return UsuarioService.usuarioLogado.posters.reverse();
  }

}

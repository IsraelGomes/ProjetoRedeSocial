import { Component, OnInit } from '@angular/core';
import { Poster } from '../../../../Aplicacao/Posters/poster';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';

@Component({
  selector: 'postagens-en',
  templateUrl: './postagens-en.component.html',
  styleUrls: ['./postagens-en.component.css']
})
export class PostagensEnComponent implements OnInit {
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

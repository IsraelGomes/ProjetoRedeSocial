import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../Aplicacao/Usuario/usuario';
import { PesquisaPessoasService } from '../../../../Aplicacao/Pesquisa-Pessoas/pesquisa-pessoas.service';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';

@Component({
  selector: 'pesquisa-pessoas-es',
  templateUrl: './pesquisa-pessoas-es.component.html',
  styleUrls: ['./pesquisa-pessoas-es.component.css']
})
export class PesquisaPessoasEsComponent implements OnInit {
  pessoas: Array<Usuario>;
  usuario: Usuario;

  constructor(private pesquisaPessoasService: PesquisaPessoasService, private usuarioService: UsuarioService) {
    this.usuario = UsuarioService.usuarioLogado;
  }

  ngOnInit() {
  }

  pesquisaPessoas(valor: string) {
    if (valor.length == 0)
      this.pessoas = new Array<Usuario>();
    else
      this.pessoas = this.pesquisaPessoasService.pesquisaPessoas(valor);
  }

  adicionarAmigo(id: number) {
    let contem: boolean = false;
    
    for(let x of UsuarioService.usuarioLogado.amigos)
    {
      if(x == id)
      {
        contem = true;
        break;
      }
    }

    if(contem == false)
    UsuarioService.usuarioLogado.amigos.push(id);

    this.usuario = UsuarioService.usuarioLogado;
    
    this.usuarioService.updateUsuario(UsuarioService.usuarioLogado);
  }
}

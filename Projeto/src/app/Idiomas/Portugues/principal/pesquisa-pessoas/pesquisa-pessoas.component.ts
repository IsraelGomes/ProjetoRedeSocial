import { Component, OnInit } from '@angular/core';
import { PesquisaPessoasService } from '../../../../Aplicacao/Pesquisa-Pessoas/pesquisa-pessoas.service';
import { Usuario } from '../../../../Aplicacao/Usuario/usuario';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';

@Component({
  selector: 'pesquisa-pessoas',
  templateUrl: './pesquisa-pessoas.component.html',
  styleUrls: ['./pesquisa-pessoas.component.css']
})
export class PesquisaPessoasComponent implements OnInit {
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

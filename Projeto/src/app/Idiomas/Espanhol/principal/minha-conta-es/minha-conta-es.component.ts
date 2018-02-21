import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';

@Component({
  selector: 'minha-conta-es',
  templateUrl: './minha-conta-es.component.html',
  styleUrls: ['./minha-conta-es.component.css']
})
export class MinhaContaEsComponent implements OnInit {

  private nome: string;
  private sobrenome: string;
  private email: string;
  private senha: string;
  private dataNascimento: string;
  private sexo: string;
  private idioma: string;
  private endereco: string;
  private telefone: string;

  constructor(private usuarioService: UsuarioService) {
    this.nome = UsuarioService.usuarioLogado.nome;
    this.sobrenome = UsuarioService.usuarioLogado.sobrenome;
    this.email = UsuarioService.usuarioLogado.email;
    this.senha = UsuarioService.usuarioLogado.senha;
    this.idioma = UsuarioService.usuarioLogado.idioma;
    this.endereco = UsuarioService.usuarioLogado.endereco;
    this.telefone = UsuarioService.usuarioLogado.telefone;

  }

  ngOnInit() {
  }

  atualizar(){
    UsuarioService.usuarioLogado.nome = this.nome;
    UsuarioService.usuarioLogado.sobrenome = this.sobrenome;
    UsuarioService.usuarioLogado.email = this.email;
    UsuarioService.usuarioLogado.senha = this.senha;
    UsuarioService.usuarioLogado.idioma = this.idioma;
    UsuarioService.usuarioLogado.endereco = this.endereco;
    UsuarioService.usuarioLogado.telefone = this.telefone;

    this.usuarioService.updateUsuario(UsuarioService.usuarioLogado);
  }
}

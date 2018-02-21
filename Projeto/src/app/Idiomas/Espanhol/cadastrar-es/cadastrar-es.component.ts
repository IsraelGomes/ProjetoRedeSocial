import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Aplicacao/Usuario/usuario.service';
import { Usuario } from '../../../Aplicacao/Usuario/usuario';

@Component({
  selector: 'cadastrar-es',
  templateUrl: './cadastrar-es.component.html',
  styleUrls: ['./cadastrar-es.component.css']
})
export class CadastrarEsComponent implements OnInit {
  private nome: string;
  private sobrenome: string;
  private email: string;
  private senha: string;
  private dataNascimento: string;
  private sexo: string;
  private resultado: string;

  constructor(private usuarioService: UsuarioService) {
    
  }

  ngOnInit() {
  }

  cadastrar(){
    let usuario: Usuario;
    usuario = new Usuario();
    usuario.setNome(this.nome);
    usuario.setSobrenome(this.sobrenome);
    usuario.setEmail(this.email);
    usuario.setSenha(this.senha);
    usuario.setData(this.dataNascimento);
    usuario.setSexo(this.sexo);
    usuario.setIdioma("espanhol");

    let resultado: string = this.usuarioService.cadastrar(usuario);
  }
}
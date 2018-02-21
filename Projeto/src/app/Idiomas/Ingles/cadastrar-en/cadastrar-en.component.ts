import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Aplicacao/Usuario/usuario';
import { UsuarioService } from '../../../Aplicacao/Usuario/usuario.service';

@Component({
  selector: 'cadastrar-en',
  templateUrl: './cadastrar-en.component.html',
  styleUrls: ['./cadastrar-en.component.css']
})
export class CadastrarEnComponent implements OnInit {
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
    usuario.setIdioma("portugues");

    let resultado: string = this.usuarioService.cadastrar(usuario);
  }
}

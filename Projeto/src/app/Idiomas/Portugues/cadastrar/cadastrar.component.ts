import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Aplicacao/Usuario/usuario.service';
import { Usuario } from '../../../Aplicacao/Usuario/usuario';

@Component({
  selector: 'cadastrar-pt',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
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

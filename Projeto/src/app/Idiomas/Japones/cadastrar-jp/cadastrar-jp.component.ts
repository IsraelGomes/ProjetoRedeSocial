import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Aplicacao/Usuario/usuario.service';
import { Usuario } from '../../../Aplicacao/Usuario/usuario';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'cadastrar-jp',
  templateUrl: './cadastrar-jp.component.html',
  styleUrls: ['./cadastrar-jp.component.css']
})
export class CadastrarJpComponent implements OnInit {
  private nome: string;
  private sobrenome: string;
  private email: string;
  private senha: string;
  private dataNascimento: string;
  private sexo: string;
  private resultado: string;

  constructor(private usuarioService: UsuarioService) {
    AppComponent.idioma = "nihongo";
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

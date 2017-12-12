import { Component, OnInit } from '@angular/core';
import { UsuarioService} from 'app/usuario.service';
import { Usuario } from 'app/usuario';

@Component({
  selector: 'cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
  providers: [UsuarioService]
})
export class CadastrarComponent implements OnInit {
  private nome: string;
  private sobrenome: string;
  private email: string;
  private senha: string;
  private dataNascimento: string;
  private sexo: string;
  private usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
  }

  cadastrar(): void {

    this.usuario = new Usuario();
    
    this.usuario.setNome(this.nome);
    this.usuario.setSobrenome(this.sobrenome);
    this.usuario.setEmail(this.email);
    this.usuario.setSenha(this.senha);
    this.usuario.setSexo(this.sexo);
    this.usuario.setData(this.dataNascimento);

    this.usuarioService.adicionar(this.usuario);
  }

  getU(): number{
    return UsuarioService.usuarios.length;
  }

}

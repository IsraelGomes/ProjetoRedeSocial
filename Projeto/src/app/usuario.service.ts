import { Injectable } from '@angular/core';
import { Usuario } from 'app/usuario';
import { BoxPopapErroLoginComponent } from 'app/box-popap-erro-login/box-popap-erro-login.component';
import { BoxPopapErroCadastroComponent } from 'app/box-popap-erro-cadastro/box-popap-erro-cadastro.component';
import { delay } from 'q';
import { Poster } from 'app/poster';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {
  static usuarios: Array<Usuario> = new Array();
  static deslogado = true;
  static carregando = false;
  static usuarioLogado: Usuario;
  apiUsuarios = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }


  static postar(conteudo: string) {
    let post: Poster = new Poster();
    post.setConteudo(conteudo);
    post.setAutor(UsuarioService.usuarioLogado.getNome());
    UsuarioService.usuarioLogado.addPoster(post);
  }

  logar(email: string, senha: string) {
    let contem: boolean = false;
    UsuarioService.carregando = true;

    for (let user = 0; user < UsuarioService.usuarios.length; user++) {
      if (UsuarioService.usuarios[user].getEmail() == email && UsuarioService.usuarios[user].getSenha() == senha) {
        UsuarioService.usuarioLogado = UsuarioService.usuarios[user];
        UsuarioService.deslogado = false;
        contem = true;
        break;
      }
    }

    if (contem == false) {

      UsuarioService.carregando = false;
      BoxPopapErroLoginComponent.abrir();
    }
  }
  adicionar(usuario: Usuario): void {

    this.http.post(this.apiUsuarios, usuario).subscribe(
      ok => {
        console.log('Cadastrado com sucesso');
      },
      erro => {
        console.log('Erro no cadastro: ' + erro.toString());
      }
    );

    /*let contem: boolean = false;
    if (UsuarioService.usuarios.length == 0) {
      UsuarioService.usuarios.push(usuario);
    }
    else {
      for (let user = 0; user < UsuarioService.usuarios.length; user++) {
        if (UsuarioService.usuarios[user].getEmail() == usuario.getEmail()) {
          BoxPopapErroCadastroComponent.abrir();

          contem = true;
          break;
        }
      }

      if (contem == false) {
        UsuarioService.usuarios.push(usuario);
      }
    }*/
  }
}
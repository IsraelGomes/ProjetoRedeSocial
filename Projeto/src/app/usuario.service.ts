import { Injectable } from '@angular/core';
import { Usuario } from 'app/usuario';
import { BoxPopapErroLoginComponent } from 'app/box-popap-erro-login/box-popap-erro-login.component';
import { BoxPopapErroCadastroComponent } from 'app/box-popap-erro-cadastro/box-popap-erro-cadastro.component';
import { delay } from 'q';
import { Poster } from 'app/poster';

@Injectable()
export class UsuarioService {
  static usuarios: Array<Usuario> = new Array();
  static deslogado = true;
  static carregando = false;
  static usuarioLogado: Usuario;

  constructor() { }


  static postar(conteudo: string){
    let post: Poster = new Poster();
    post.setConteudo(conteudo);
    post.setAutor(UsuarioService.usuarioLogado.getNome());
    UsuarioService.usuarioLogado.addPoster(post);
  }

  logar(email: string, senha: string){
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

    if(contem == false){

    UsuarioService.carregando = false;
      BoxPopapErroLoginComponent.abrir();
    }
  }
  adicionar(usuario: Usuario): void {

    let contem: boolean = false;
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

      if(contem == false){
        UsuarioService.usuarios.push(usuario);
      }
    }
  }
}
import { Injectable } from '@angular/core';
import { delay } from 'q';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Poster } from '../Posters/poster';

@Injectable()
export class UsuarioService {
  static logado = false;
  static usuarioLogado: Usuario;
  static amigosOnline: Array<Usuario>;

  apiUsuarios = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }


  static postar(conteudo: string) {

  }

  loginAutomatico(): string {
    let info: string;
    let informacao: string[];
    let email: string;
    let senha: string;

    info = (localStorage.usuario);

    if (info == null) {
      UsuarioService.usuarioLogado = null;
      UsuarioService.logado = false;
      return;
    }

    informacao = info.split("\n");
    email = informacao[0];
    senha = informacao[1];

    this.logar(email, senha);
  }



  logar(email: string, senha: string): string {

    let resultado: string;

    let usuarios: Observable<Usuario[]>;
    usuarios = this.http.get<Usuario[]>(this.apiUsuarios);

    usuarios.subscribe(
      ok => {
        for (let usuario of ok) {
          if (usuario.email == email && usuario.senha == senha) {
            UsuarioService.logado = true;
            UsuarioService.usuarioLogado = usuario;
            localStorage.usuario = email + "\n" + senha;
            UsuarioService.usuarioLogado.online = true;
            this.updateUsuario(UsuarioService.usuarioLogado);
          }
        }
      },
      erro => {
        resultado = "erro ao logar";
      }

    );

    return resultado;
  }
  cadastrar(usuario: Usuario): string {
    let resultado: string;

    let usuarios: Observable<Usuario[]>;
    usuarios = this.http.get<Usuario[]>(this.apiUsuarios);

    usuarios.subscribe(
      ok => {
        for (let user of ok) {
          if (user.email == usuario.email && user.senha == usuario.senha) {
            UsuarioService.logado = false;
            UsuarioService.usuarioLogado = null;

            return "erro ao cadastrar";
          }
        }

        if (resultado != "erro ao cadastrar") {
          this.http.post(this.apiUsuarios, usuario).subscribe(
            cadastrado => {
              UsuarioService.logado = true;
              UsuarioService.usuarioLogado = usuario;
              localStorage.usuario = usuario.getEmail() + "\n" + usuario.getSenha();
              UsuarioService.usuarioLogado.online = true;

              this.updateUsuario(UsuarioService.usuarioLogado);
              resultado = "Cadastrado com sucesso";
            },
            erroAoCadastrar => {
              UsuarioService.logado = false;
              UsuarioService.usuarioLogado = null;
              resultado = "erro ao cadastrar";
            }
          );
        }
      },
      erro => {
        resultado = "erro ao cadastrar";
      });

    return resultado;
  }

  sair() {
    localStorage.removeItem("usuario");
    UsuarioService.logado = false;
    UsuarioService.usuarioLogado.online = false;
    this.updateUsuario(UsuarioService.usuarioLogado);
    UsuarioService.usuarioLogado = null;
  }

  updateUsuario(usuario: Usuario) {
    UsuarioService.usuarioLogado.amigos = usuario.amigos;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.put(this.apiUsuarios + "/" + usuario.id, JSON.stringify(usuario), httpOptions
    ).subscribe(
      cadastrado => {

      },
      erroAoCadastrar => {

      }
      );
  }

  getAmigos(): Array<Usuario> {

    UsuarioService.amigosOnline = new Array<Usuario>();

    let resultado: string;

    for (let id of UsuarioService.usuarioLogado.amigos) {

      let usuarios: Observable<Usuario>;
      usuarios = this.http.get<Usuario>(this.apiUsuarios + "/" + id);

      usuarios.subscribe(
        ok => {
          UsuarioService.amigosOnline.push(ok);
        },
        erro => {
          resultado = "erro ao logar";
        }

      );
    }


    return UsuarioService.amigosOnline;
  }

  fazPostagem(poster: Poster) {

    UsuarioService.usuarioLogado.posters.push(poster);

    this.updateUsuario(UsuarioService.usuarioLogado);


    let resultado: string;

    for (let id of UsuarioService.usuarioLogado.amigos) {

      let usuarios: Observable<Usuario>;
      usuarios = this.http.get<Usuario>(this.apiUsuarios + "/" + id);

      usuarios.subscribe(
        ok => {
          ok.posters.push(poster);
          this.updateUsuario(ok);
        },
        erro => {
          resultado = "erro ao logar";
        }
      );
    }
  }
}
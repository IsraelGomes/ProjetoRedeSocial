import { Injectable } from '@angular/core';
import { delay } from 'q';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {
  static logado = false;
  static usuarioLogado: Usuario;

  apiUsuarios = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }


  static postar(conteudo: string) {

  }

  loginAutomatico(): string{
    let info: string;
    let informacao: string[];
    let email: string;
    let senha: string;

    info = (localStorage.usuario);

    if(info == null)
    {
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
       for(let usuario of ok)
       {
          if(usuario.email == email && usuario.senha == senha)
          {
            UsuarioService.logado = true;
            UsuarioService.usuarioLogado = usuario;
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
        for(let user of ok)
        {
           if(user.email == usuario.email && user.senha == usuario.senha)
           {
             UsuarioService.logado = false;
             UsuarioService.usuarioLogado = null;

             resultado = "erro ao cadastrar";
             break;
           }
        }

        if(resultado != "erro ao cadastrar")
        {
          this.http.post(this.apiUsuarios, usuario).subscribe(
            cadastrado => {
              UsuarioService.logado = true;
              UsuarioService.usuarioLogado = usuario;
              localStorage.usuario =  usuario.getEmail() + "\n" + usuario.getSenha();
      
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

  sair(){
    localStorage.removeItem("usuario");
    UsuarioService.logado = false;
    UsuarioService.usuarioLogado = null;
  }
}
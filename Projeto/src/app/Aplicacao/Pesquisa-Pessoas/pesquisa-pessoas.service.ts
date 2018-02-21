import { Injectable } from '@angular/core';
import { Usuario } from '../Usuario/usuario';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PesquisaPessoasService {
  apiUsuarios = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  pesquisaPessoas(valor: string): Array<Usuario>{
    let usuarios: Observable<Usuario[]>;
    let pessoas: Array<Usuario>;
    pessoas = new Array<Usuario>();

    usuarios = this.http.get<Usuario[]>(this.apiUsuarios);
 
    usuarios.subscribe(
      ok => {
         for(let usuario of ok)
         {
            if((usuario.nome + " " + usuario.sobrenome).substring(0, valor.length).toLowerCase() == valor.toLowerCase())
            {
              usuario.senha = "";
              pessoas.push(usuario);
            }
         }
      },
      erro => {
        
      }
     );

     return pessoas;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listagem de Pessoasng';
}

export class Usuario{

  nome: string;
  sobreNome: string;
  dataNascimento: String;
  idioma: string;
  email: string;
  senha: string;
  endereco: string;
  telefone: string;

  amigos:  Usuario[];
  mesagem: Msm[];
  novasMensagens: Msm[];
  notificacoes: string[];

  public set Post(postagem: string){

  }

  public set EnviMensagem(enviar: string){

  }

}

// classe mesnsagem

export class Msm{

  texto: string;
  //data: date;  não possui o tipo data ????
  nomeUsr: string;

}

// classe postagens

export class Post{

  texto: string;
  //data: data;
  tipoPost: string;
  nomeUsr: string;


}

//classe usuarioService

export class usuarioServ{

  public set cadastrarUrs(cadastrar: string){

  }

  public set login(logar: string){


  }
}

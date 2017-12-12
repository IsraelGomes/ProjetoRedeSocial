import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecalho-login-cadastro',
  templateUrl: './cabecalho-login-cadastro.component.html',
  styleUrls: ['./cabecalho-login-cadastro.component.css']
})
export class CabecalhoLoginCadastroComponent implements OnInit {
  buttonName: string;
 
  name: string;
  val: boolean = true;
  nomes: string[] = ["israel", "israel2"];

  constructor() {
    this.buttonName = "Cadastrar";
  }

  ngOnInit() {
  }
  alterarEstado(): void{
    this.val = !this.val;

    if(this.buttonName == "Logar")
      this.buttonName = "Cadastrar";
    else
      this.buttonName = "Logar";

      this.nomes.push(this.nomes[0]);
  }

  mudar(name: string): void{
    this.name = name + " ";
  }

}

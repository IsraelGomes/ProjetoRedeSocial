import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box-popap-erro-cadastro',
  templateUrl: './box-popap-erro-cadastro.component.html',
  styleUrls: ['./box-popap-erro-cadastro.component.css']
})
export class BoxPopapErroCadastroComponent implements OnInit {
  menssagem: string = "Email Já Cadastrado!";
  
    static estadoBoxErro: boolean = false;
  
    constructor() { }
  
    ngOnInit() {
    }
  
  
    fechar(): void {
      BoxPopapErroCadastroComponent.estadoBoxErro = false;
    }
  
    static abrir(): void {
      BoxPopapErroCadastroComponent.estadoBoxErro = true;
    }
}

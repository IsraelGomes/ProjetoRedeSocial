import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box-popap-erro-login',
  templateUrl: './box-popap-erro-login.component.html',
  styleUrls: ['./box-popap-erro-login.component.css']
})
export class BoxPopapErroLoginComponent implements OnInit {
  menssagem: string = "Login ou Senha Incorretos!";

  static estadoBoxErro: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  fechar(): void {
    BoxPopapErroLoginComponent.estadoBoxErro = false;
  }

  static abrir(): void {
    BoxPopapErroLoginComponent.estadoBoxErro = true;
  }

}
